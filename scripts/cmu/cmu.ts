// cspell:disable
/* eslint-disable @typescript-eslint/prefer-destructuring */
import fs from 'node:fs/promises';
import path from 'node:path';

import { create1dArray, empty, quote, range, space, splitLines, sum } from '@technobuddha/library';

import { data, externalReference } from '../helpers/paths.ts';
import { readDocumentation } from '../helpers/read-documentation.ts';
import { saveRaw } from '../helpers/save-raw.ts';
import { saveTerser } from '../helpers/save-terser.ts';

import { compounds } from './compounds.ts';
import { onsets } from './onsets.ts';
import { arpaPhonemes, type Phoneme } from './phonemes.ts';

type MaskedPhoneme = string | boolean;
const COMPOUND_PARTS_MINIMUM_LENGTH = 5;

const input1 = path.join(externalReference, 'cmu', 'cmudict.dict');
const input2 = path.join(externalReference, 'cmu', 'cmudict.vp');

const cmuDict: [string, Phoneme[]][] = [
  ...(await fs.readFile(input1, { encoding: 'utf8' }).then((contents) =>
    splitLines(contents)
      .map((l) => l.split('#')[0].trim())
      .filter((l) => l.length > 0)
      .map((line) => line.split(/\s/v))
      .map(
        ([word, ...transcriptions]) =>
          [word.replace(/\(\d+\)$/v, empty), transcriptions.map((p) => arpaPhonemes[p])] as [
            string,
            Phoneme[],
          ],
      ),
  )),
  ...(await fs.readFile(input2, { encoding: 'utf8' }).then((contents) =>
    splitLines(contents)
      .map((l) => l.split('#')[0].trim())
      .filter((l) => l.length > 0)
      .map((line) => line.split(/\s+/v))
      .map(
        ([word, ...transcriptions]) =>
          [word.replace(/^([^\p{L}]+).*/v, '$1'), transcriptions.map((p) => arpaPhonemes[p])] as [
            string,
            Phoneme[],
          ],
      ),
  )),
];

// Build Word Data Index
const wordDataIndex: Map<string, string[]> = new Map();
for (const [word, phonemes] of cmuDict) {
  const key = keyFromMasked(phonemes.map((p) => maskPhoneme(p)));
  const arr = wordDataIndex.get(key) ?? [];
  arr.push(word);
  wordDataIndex.set(key, arr);
}

const ipaEntries: Map<string, Set<string>> = new Map();
for (const [word, phonemes] of cmuDict) {
  const ipa = constructIpa(word, phonemes);

  const set = ipaEntries.get(word) ?? new Set();
  set.add(ipa);
  ipaEntries.set(word, set);
}

const docsIPA = await readDocumentation('cmu-dict-ipa');
const ipaCode = ['export const cmuDictIPA = {'];

for (const [word, ipas] of Array.from(ipaEntries.entries()).sort(([a], [b]) =>
  a.localeCompare(b, 'en', { usage: 'sort', sensitivity: 'base' }),
)) {
  ipaCode.push(
    `${quote(word)}:[${Array.from(ipas)
      .map((ipa) => quote(ipa))
      .join(', ')}],`,
  );
}
ipaCode.push('};', empty);

const ipaDecl = [...docsIPA, 'export declare const cmuDictIPA: Record<string, string[]>;'];

const arpaEntries: Map<string, Set<string>> = new Map();
for (const [word, phonemes] of cmuDict) {
  const arpa = constructArpabet(phonemes);

  const set = arpaEntries.get(word) ?? new Set();
  set.add(arpa);
  arpaEntries.set(word, set);
}

const docsArpabet = await readDocumentation('cmu-dict-arpabet');
const arpaCode = ['export const cmuDictArpabet = {'];
for (const [word, arpas] of Array.from(arpaEntries.entries()).sort(([a], [b]) =>
  a.localeCompare(b, 'en', { usage: 'sort', sensitivity: 'base' }),
)) {
  arpaCode.push(
    `${quote(word)}:[${Array.from(arpas)
      .map((ipa) => quote(ipa))
      .join(', ')}],`,
  );
}
arpaCode.push('};', empty);

const arpaDecl = [...docsArpabet, 'export declare const cmuDictArpabet: Record<string, string[]>;'];

await Promise.all([
  saveTerser(path.join(data, 'cmu-dict-ipa.js'), ipaCode, { quiet: true }),
  saveRaw(path.join(data, 'cmu-dict-ipa.d.ts'), ipaDecl, { quiet: true }),
  saveTerser(path.join(data, 'cmu-dict-arpabet.js'), arpaCode, { quiet: true }),
  saveRaw(path.join(data, 'cmu-dict-arpabet.d.ts'), arpaDecl, { quiet: true }),
]);

//------------------------------------------------------------------------------------------------//

function maskPhoneme(phoneme: Phoneme): MaskedPhoneme {
  return phoneme.category === 'vowel' ? Boolean(phoneme.stress) : phoneme.ipa;
}

function keyFromMasked(masked: MaskedPhoneme[]): string {
  return masked.map(String).join('\u0000');
}

function shiftValues(values: number[], shift: number): number[] {
  return values.map((v) => v + shift);
}

function isCompoundOf(word: string, left: string, right: string): boolean {
  if (word.length >= left.length + right.length && word.startsWith(left) && word.endsWith(right)) {
    const connector = word.slice(left.length, word.length - right.length);
    return (
      /^\W*$/v.test(connector) &&
      (connector.length > 0 ||
        compounds.has([left, right]) ||
        Math.min(left.length, right.length) >= COMPOUND_PARTS_MINIMUM_LENGTH)
    );
  }
  return false;
}

function findSplitIndices(word: string, phonemes: Phoneme[]): number[] {
  const stressed = range(0, phonemes.length - 1)
    .filter((i) => phonemes[i].stress)
    .toArray();
  if (stressed.length < 2) {
    return [];
  }

  const masked = phonemes.map(maskPhoneme);
  const indicesWithWords: [number, [string, string]][] = [];

  const first = stressed[0];
  const last = stressed.at(-1)!;
  for (let index = first + 1; index <= last; index++) {
    const leftKey = keyFromMasked(masked.slice(0, index));
    const rightKey = keyFromMasked(masked.slice(index));

    const leftWords = wordDataIndex.get(leftKey) ?? [];
    const rightWords = wordDataIndex.get(rightKey) ?? [];
    outer: for (const left of leftWords) {
      for (const right of rightWords) {
        if (isCompoundOf(word, left, right)) {
          indicesWithWords.push([index, [left, right]]);
          break outer;
        }
      }
    }
  }

  const indices = indicesWithWords.map((iw) => iw[0]);
  const ok = indicesWithWords.every(([index, [left, right]], metaindex) => {
    const leftOk =
      metaindex === 0 ||
      findSplitIndices(left, phonemes.slice(0, index)).toString() ===
        indices.slice(0, metaindex).toString();
    const rightOk =
      metaindex === indicesWithWords.length - 1 ||
      findSplitIndices(right, phonemes.slice(index)).toString() ===
        shiftValues(indices.slice(metaindex + 1), -index).toString();
    return leftOk && rightOk;
  });
  return ok ? indices : [];
}

function constructIpa(word: string, phonemes: Phoneme[]): string {
  const vowelCount = sum(phonemes.map((p) => (p.category === 'vowel' ? 1 : 0)));
  const stressByPosition: string[] = create1dArray(phonemes.length, empty);

  if (vowelCount > 1) {
    const breakIndices = [0, ...findSplitIndices(word, phonemes)];

    for (let index = 0; index < phonemes.length; index++) {
      const phoneme = phonemes[index];
      if (phoneme.stress) {
        let stressPosition = index;
        while (
          !breakIndices.includes(stressPosition) &&
          phonemes
            .slice(stressPosition - 1, index)
            .map((p) => p.ipa)
            .join(empty) &&
          onsets.has(
            phonemes
              .slice(stressPosition - 1, index)
              .map((p) => p.ipa)
              .join(empty),
          )
        ) {
          stressPosition -= 1;
        }
        for (const startIndex of breakIndices) {
          if (startIndex >= stressPosition) {
            break;
          }
          if (phonemes.slice(startIndex, stressPosition).every((p) => p.category !== 'vowel')) {
            stressPosition = startIndex;
            break;
          }
        }
        stressByPosition[stressPosition] = phoneme.stress ?? empty;
      }
    }
  }
  let body = empty;
  for (let i = 0; i < phonemes.length; i++) {
    body += (stressByPosition[i] ?? empty) + phonemes[i].ipa;
  }
  return `/${body}/`;
}

function constructArpabet(phonemes: Phoneme[]): string {
  return phonemes.map((p) => p.arpa).join(space);
}
