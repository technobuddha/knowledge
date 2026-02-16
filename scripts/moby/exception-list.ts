import fs from 'node:fs/promises';
import path from 'node:path';

import {
  difference,
  DIFFERENCE_DELETE,
  DIFFERENCE_EQUAL,
  DIFFERENCE_INSERT,
  empty,
  escapeHTML,
} from '@technobuddha/library';
import { err, locatePackageRoot } from '@technobuddha/library/node';

import { exceptions } from './data/exceptions.ts';

const root = await locatePackageRoot();
if (!root) {
  err('Could not find root directory');
  process.exit(1);
}

const md: string[] = [
  '<style>',
  '  .del { background-color: #4f1111; text-decoration: line-through; padding: 0; margin: 0 }',
  '  .ins { background-color: #185218; padding: 0; margin: 0 }',
  '</style>',
  '</style>',
  '',
  '<table>',
  '  <thead>',
  '    <tr>',
  '      <th>Word</th>',
  '      <th>Change</th>',
  '      <th>Line</th>',
  '    </tr>',
  '  </thead>',
  '  <tbody>',
];

for (const [word, exception] of Object.entries(exceptions).sort(
  ([, { line: a }], [, { line: b }]) => a - b,
)) {
  if ('from' in exception) {
    const { from, to, line } = exception;
    const diff = difference(from, to);

    md.push('<tr>', `<td>${escapeHTML(word)}</td>`);

    let cell = empty;

    for (const d of diff) {
      switch (d.op) {
        case DIFFERENCE_EQUAL: {
          cell += `<span>${escapeHTML(d.text)}</span>`;
          break;
        }
        case DIFFERENCE_DELETE: {
          cell += `<span class="del">${escapeHTML(d.text)}</span>`;
          break;
        }

        case DIFFERENCE_INSERT: {
          cell += `<span class="ins">${escapeHTML(d.text)}</span>`;
          break;
        }

        // no default
      }
    }

    md.push(`<td>${cell}</td>`, `<td>${line}</td>`, '</tr>');
  }
}

md.push('</tbody>', '</table>');

await fs.writeFile(
  path.join(root, 'documentation', 'moby-pronunciation-exceptions.md'),
  md.join('\n'),
  'utf-8',
);
