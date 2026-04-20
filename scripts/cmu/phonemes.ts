/**
 * Phoneme data as a TypeScript constant.
 *
 * @group Phonetics
 * @category Data
 */
export type Phoneme = {
  ipa: string;
  arpa: string;
  stress?: string;
  category:
    | 'vowel'
    | 'stop'
    | 'affricate'
    | 'fricative'
    | 'aspirate'
    | 'liquid'
    | 'nasal'
    | 'semivowel';
};

// prettier-ignore
export const arpaPhonemes: Record<string, Phoneme> = {
  AA:   { arpa: 'AA',   ipa: 'ɑ',                 category: 'vowel' }, // ɑː
  AA0:  { arpa: 'AA0',  ipa: 'ɑ',                 category: 'vowel' },
  AA1:  { arpa: 'AA1',  ipa: 'ɑ',   stress: 'ˈ',  category: 'vowel' },
  AA2:  { arpa: 'AA2',  ipa: 'ɑ',   stress: 'ˌ',  category: 'vowel' },
  AE:   { arpa: 'AE',   ipa: 'æ',                 category: 'vowel' },
  AE0:  { arpa: 'AE0',  ipa: 'æ',                 category: 'vowel' },
  AE1:  { arpa: 'AE1',  ipa: 'æ',   stress: 'ˈ',  category: 'vowel' },
  AE2:  { arpa: 'AE2',  ipa: 'æ',   stress: 'ˌ',  category: 'vowel' },
  AH:   { arpa: 'AH',   ipa: 'ə',                 category: 'vowel' },
  AH0:  { arpa: 'AH0',  ipa: 'ə',                 category: 'vowel' },
  AH1:  { arpa: 'AH1',  ipa: 'ʌ',   stress: 'ˈ',  category: 'vowel' },
  AH2:  { arpa: 'AH2',  ipa: 'ʌ',   stress: 'ˌ',  category: 'vowel' },
  AO:   { arpa: 'AO',   ipa: 'ɔ',                 category: 'vowel' },
  AO0:  { arpa: 'AO0',  ipa: 'ɔ',                 category: 'vowel' },
  AO1:  { arpa: 'AO1',  ipa: 'ɔ',   stress: 'ˈ',  category: 'vowel' },
  AO2:  { arpa: 'AO2',  ipa: 'ɔ',   stress: 'ˌ',  category: 'vowel' },
  AW:   { arpa: 'AW',   ipa: 'aʊ̯',                category: 'vowel' }, // aʊ
  AW0:  { arpa: 'AW0',  ipa: 'aʊ̯',                category: 'vowel' },
  AW1:  { arpa: 'AW1',  ipa: 'aʊ̯',  stress: 'ˈ',  category: 'vowel' },
  AW2:  { arpa: 'AW2',  ipa: 'aʊ̯',  stress: 'ˌ',  category: 'vowel' },
  AX:   { arpa: 'AX',   ipa: 'ə',                 category: 'vowel' },
  AX0:  { arpa: 'AX0',  ipa: 'ə',                 category: 'vowel' },
  AX1:  { arpa: 'AX1',  ipa: 'ə',   stress: 'ˈ',  category: 'vowel' },
  AX2:  { arpa: 'AX2',  ipa: 'ə',   stress: 'ˌ',  category: 'vowel' },
  AXR:  { arpa: 'AXR',  ipa: 'ɚ',                 category: 'vowel' },
  AXR0: { arpa: 'AXR0', ipa: 'ɚ',                 category: 'vowel' },
  AXR1: { arpa: 'AXR1', ipa: 'ɝ',   stress: 'ˈ',  category: 'vowel' },
  AXR2: { arpa: 'AXR2', ipa: 'ɝ',   stress: 'ˌ',  category: 'vowel' },
  AY:   { arpa: 'AY',   ipa: 'aɪ̯',                category: 'vowel' },
  AY0:  { arpa: 'AY0',  ipa: 'aɪ̯',                category: 'vowel' },
  AY1:  { arpa: 'AY1',  ipa: 'aɪ̯',  stress: 'ˈ',  category: 'vowel' },
  AY2:  { arpa: 'AY2',  ipa: 'aɪ̯',  stress: 'ˌ',  category: 'vowel' },
  B:    { arpa: 'B',    ipa: 'b',                 category: 'stop' },
  CH:   { arpa: 'CH',   ipa: 't͡ʃ',                category: 'affricate' }, //ʧ tʃ
  D:    { arpa: 'D',    ipa: 'd',                 category: 'stop' },
  DH:   { arpa: 'DH',   ipa: 'ð',                 category: 'fricative' },
  DX:   { arpa: 'DX',   ipa: 'ɾ',                 category: 'stop' }, // ɾ
  EH:   { arpa: 'EH',   ipa: 'ɛ',                 category: 'vowel' },
  EH0:  { arpa: 'EH0',  ipa: 'ɛ',                 category: 'vowel' },
  EH1:  { arpa: 'EH1',  ipa: 'ɛ',   stress: 'ˈ',  category: 'vowel' },
  EH2:  { arpa: 'EH2',  ipa: 'ɛ',   stress: 'ˌ',  category: 'vowel' },
  EL:   { arpa: 'EL',   ipa: 'l̩',                 category: 'liquid' },
  EM:   { arpa: 'EM',   ipa: 'm̩',                 category: 'nasal' },
  EN:   { arpa: 'EN',   ipa: 'n̩',                 category: 'nasal' },
  ER:   { arpa: 'ER',   ipa: 'ɚ',                 category: 'vowel' }, // ɝ
  ER0:  { arpa: 'ER0',  ipa: 'ɚ',                 category: 'vowel' }, // ɝː
  ER1:  { arpa: 'ER1',  ipa: 'ɝ',   stress: 'ˈ',  category: 'vowel' },
  ER2:  { arpa: 'ER2',  ipa: 'ɝ',   stress: 'ˌ',  category: 'vowel' },
  EY:   { arpa: 'EY',   ipa: 'eɪ̯',                category: 'vowel' }, // eɪ
  EY0:  { arpa: 'EY0',  ipa: 'eɪ̯',                category: 'vowel' },
  EY1:  { arpa: 'EY1',  ipa: 'eɪ̯',  stress: 'ˈ',  category: 'vowel' },
  EY2:  { arpa: 'EY2',  ipa: 'eɪ̯',  stress: 'ˌ',  category: 'vowel' },
  F:    { arpa: 'F',    ipa: 'f',                 category: 'fricative' },
  G:    { arpa: 'G',    ipa: 'ɡ',                 category: 'stop' }, //ɡ
  HH:   { arpa: 'HH',   ipa: 'h',                 category: 'aspirate' },
  IH:   { arpa: 'IH',   ipa: 'ɪ',                 category: 'vowel' }, // ɪ !!!!!!!!!!!!!!!!!!!!!!!!!
  IH0:  { arpa: 'IH0',  ipa: 'ɪ',                 category: 'vowel' }, // ə
  IH1:  { arpa: 'IH1',  ipa: 'ɪ',   stress: 'ˈ',  category: 'vowel' },
  IH2:  { arpa: 'IH2',  ipa: 'ɪ',   stress: 'ˌ',  category: 'vowel' },
  IX:   { arpa: 'IX',   ipa: 'ɨ',                 category: 'vowel' },
  IX0:  { arpa: 'IX0',  ipa: 'ɨ',                 category: 'vowel' },
  IX1:  { arpa: 'IX1',  ipa: 'ɨ',   stress: 'ˈ',  category: 'vowel' },
  IX2:  { arpa: 'IX2',  ipa: 'ɨ',   stress: 'ˌ',  category: 'vowel' },
  IY:   { arpa: 'IY',   ipa: 'i',                 category: 'vowel'  },
  IY0:  { arpa: 'IY0',  ipa: 'i',                 category: 'vowel'  },
  IY1:  { arpa: 'IY1',  ipa: 'i',   stress: 'ˈ',  category: 'vowel'  },
  IY2:  { arpa: 'IY2',  ipa: 'i',   stress: 'ˌ',  category: 'vowel'  },
  JH:   { arpa: 'JH',   ipa: 'd͡ʒ',                category: 'affricate' }, //ʤ
  K:    { arpa: 'K',    ipa: 'k',                 category: 'stop' },
  L:    { arpa: 'L',    ipa: 'l',                 category: 'liquid' },
  M:    { arpa: 'M',    ipa: 'm',                 category: 'nasal' },
  N:    { arpa: 'N',    ipa: 'n',                 category: 'nasal' },
  NG:   { arpa: 'NG',   ipa: 'ŋ',                 category: 'nasal' },
  NX:   { arpa: 'NX',   ipa: 'ɾ̃',                 category: 'nasal' },
  OW:   { arpa: 'OW',   ipa: 'oʊ̯',                category: 'vowel' }, // oʊ̯ʊ
  OW0:  { arpa: 'OW0',  ipa: 'oʊ̯',                category: 'vowel' },
  OW1:  { arpa: 'OW1',  ipa: 'oʊ̯',  stress: 'ˈ',  category: 'vowel' },
  OW2:  { arpa: 'OW2',  ipa: 'oʊ̯',  stress: 'ˌ',  category: 'vowel' },
  OY:   { arpa: 'OY',   ipa: 'ɔɪ̯',                category: 'vowel' }, //ɔɪ
  OY0:  { arpa: 'OY0',  ipa: 'ɔɪ̯',                category: 'vowel' },
  OY1:  { arpa: 'OY1',  ipa: 'ɔɪ̯',  stress: 'ˈ',  category: 'vowel' },
  OY2:  { arpa: 'OY2',  ipa: 'ɔɪ̯',  stress: 'ˌ',  category: 'vowel' },
  P:    { arpa: 'P',    ipa: 'p',                 category: 'stop' },
  Q:    { arpa: 'Q',    ipa: 'ʔ',                 category: 'stop' },
  R:    { arpa: 'R',    ipa: 'ɹ',                 category: 'liquid' }, //ɹ r
  S:    { arpa: 'S',    ipa: 's',                 category: 'fricative' },
  SH:   { arpa: 'SH',   ipa: 'ʃ',                 category: 'fricative' },
  T:    { arpa: 'T',    ipa: 't',                 category: 'stop' },
  TH:   { arpa: 'TH',   ipa: 'θ',                 category: 'fricative' },
  UH:   { arpa: 'UH',   ipa: 'ʊ',                 category: 'vowel' },
  UH0:  { arpa: 'UH0',  ipa: 'ʊ',                 category: 'vowel' },
  UH1:  { arpa: 'UH1',  ipa: 'ʊ',   stress: 'ˈ',  category: 'vowel' },
  UH2:  { arpa: 'UH2',  ipa: 'ʊ',   stress: 'ˌ',  category: 'vowel' },
  UW:   { arpa: 'UW',   ipa: 'u',                 category: 'vowel' },
  UW0:  { arpa: 'UW0',  ipa: 'u',                 category: 'vowel' },
  UW1:  { arpa: 'UW1',  ipa: 'u',   stress: 'ˈ',  category: 'vowel' },
  UW2:  { arpa: 'UW2',  ipa: 'u',   stress: 'ˌ',  category: 'vowel' },
  UX:   { arpa: 'UX',   ipa: 'ʉ',                 category: 'vowel' },
  UX0:  { arpa: 'UX0',  ipa: 'ʉ',                 category: 'vowel' },
  UX1:  { arpa: 'UX1',  ipa: 'ʉ',   stress: 'ˈ',  category: 'vowel' },
  UX2:  { arpa: 'UX2',  ipa: 'ʉ',   stress: 'ˌ',  category: 'vowel' },
  V:    { arpa: 'V',    ipa: 'v',                 category: 'fricative' },
  W:    { arpa: 'W',    ipa: 'w',                 category: 'semivowel' },
  WH:   { arpa: 'WH',   ipa: 'ʍ',                 category: 'fricative' },
  Y:    { arpa: 'Y',    ipa: 'j',                 category: 'semivowel' },
  Z:    { arpa: 'Z',    ipa: 'z',                 category: 'fricative' },
  ZH:   { arpa: 'ZH',   ipa: 'ʒ',                 category: 'fricative' },
};
