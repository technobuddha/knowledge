/* eslint-disable @typescript-eslint/naming-convention */
import { empty, space } from '@technobuddha/library';

/*
AA  /A/
AE  /&/
AH  /@/
AO  /O/  /oU/
AW  /AU/
AX  /@/
AXR /@/
AY  /aI/
EH  /E/
ER  /[@]/
EY  /eI/
IH  /I/
IX  /eI/, /I/
IY  /i/
OW  /oU/
OY  //Oi//
UH  /U/
UW  /u/
UX  /u/

B   b
CH  /tS/
D   d
DH  /D/
DX  t
EL  l
EM  m
EN  n
F   f
G   g
HH  h
JH  /dZ/
K   k
L   l
M   m
N   n
NG  /N/
NX  nt
P   p
Q   ???
R   r
S   s
SH  /S/
T   t
TH  /T/
V   v
W   w
WH  /hW/
Y   /j/
Z   z
ZH
*/

// prettier-ignore
export const ipaPhones: Record<string, { ipa: string, arpa?: string }> = {
  [empty]:  { ipa: empty, arpa: empty },
  [space]:  { ipa: space, arpa: empty },
  '_':      { ipa: space,             },  // used to represent spaces in multi-word entrie
  "'":      { ipa: 'ˈ',               },  // primary stress
  ",":      { ipa: 'ˌ',               },  // secondary stress
  '/&/':    { ipa: 'æ',   arpa: 'AE'  },  // sounds like the "a" in "dab"
  '/-/':    { ipa: 'ə',   arpa: 'AH'  },  // sounds like the "ir" glide in "tire"
                                          //  or the glide "e" in "system" (diphtong schwa)
                                          //  or the "dl" glide in "handle"
  "/@/":    { ipa: 'ə',   arpa: 'AH'  },  // sounds like the "a" in "ado"
                                          //  or the "den" glide in "sodden" (diphthong little schwa)
                                          // sounds like the "u" in "cup"
  '/(@)/':  { ipa: 'ɛ',   arpa: 'EH'  },  // sounds like the "a" in "air"
  '/[@]/':  { ipa: 'ɜ',               },  // ɜr, ər     WIKIPEDIA ONLY
                                          // sounds like the "u" in "burn"
  '/A/':    { ipa: 'ɑ',   arpa: 'AA'  },  // sounds like the "a" in "far"
                                          // ?? sounds like the "o" in "bob"
  '/aI/':   { ipa: 'aɪ',  arpa: 'AY'  },  // sounds like the "i" in "ice"
  '/AU/':   { ipa: 'aʊ',  arpa: 'AW'  },  // sounds like the "ow" in "how"
  'b':      { ipa: 'b',   arpa: 'B'   },  // sounds like the "b" in "nab"
  'd':      { ipa: 'd',   arpa: 'D'   },  // sounds like the "d" in "pod"
  '/D/':    { ipa: 'ð',   arpa: 'DH'  },  // sounds like the "th" in "the"
  '/dZ/':   { ipa: 'd͡ʒ',  arpa: 'JH'  },  // sounds like the "g" in "vegetably"
  '/E/':    { ipa: 'ɛ',   arpa: 'EH'  },  // sounds like the "e" in "red"
  '/eI/':   { ipa: 'eɪ',  arpa: 'EY'  },  // sounds like the "a" in "day"
  'f':      { ipa: 'f',   arpa: 'F'   },  // sounds like the "f" in "elf"
  'g':      { ipa: 'ɡ',   arpa: 'G'   },  // sounds like the "g" in "fig"
  'h':      { ipa: 'h',   arpa: 'HH'  },  // sounds like the "h" in "had"
  '/hw/':   { ipa: 'w',   arpa: 'W'   },  // sounds like the "w" in "white"
  '/i/':    { ipa: 'i',   arpa: 'IY'  },  // sounds like the "e" in "see"
  '/I/':    { ipa: 'ɪ',   arpa: 'IH'  },  // sounds like the "i" in "hid"
  '/j/':    { ipa: 'j',   arpa: 'Y'   },  // sounds like the "y" in "you"
  '/ju/':   { ipa: 'juː',             },  // WIKIPEDIA ONLY
  'k':      { ipa: 'k',   arpa: 'K'   },  // sounds like the "c" in "act"
  'l':      { ipa: 'l',   arpa: 'L'   },  // sounds like the "l" in "ail"
  'm':      { ipa: 'm',   arpa: 'M'   },  // sounds like the "m" in "aim"
  'n':      { ipa: 'n',   arpa: 'N'   },  // sounds like the "n" in "and"
  '/N/':    { ipa: 'ŋ',   arpa: 'NG'  },  // sounds like the "ng" in "bang"
  '/O/':    { ipa: 'ɔ',   arpa: 'AO'  },  // sounds like the "o" in "dog"
  '/Oi/':   { ipa: 'ɔɪ',  arpa: 'OY'  },  // sounds like the "oi" in "oil"
  '/oU/':   { ipa: 'oʊ',  arpa: 'OW'  },  // sounds like the "o" in "boat"
  'p':      { ipa: 'p',   arpa: 'P'   },  // sounds like the "p" in "imp"
  'r':      { ipa: 'ɹ',   arpa: 'R'   },  // sounds like the "r" in "ire"
  's':      { ipa: 's',   arpa: 'S'   },  // sounds like the "s" in "sip"
  '/S/':    { ipa: 'ʃ',   arpa: 'SH'  },  // sounds like the "sh" in "she"
  't':      { ipa: 't',   arpa: 'T'   },  // sounds like the "t" in "tap"
  '/T/':    { ipa: 'θ',   arpa: 'TH'  },  // sounds like the "th" in "bath"
  '/tS/':   { ipa: 't͡ʃ',  arpa: 'CH'  },  // sounds like the "ch" in "ouch"
  '/u/':    { ipa: 'u',   arpa: 'UW'  },  // sounds like the "oo" in "too"
  '/U/':    { ipa: 'ʊ',   arpa: 'UH'  },  // sounds like the "oo" in "book"
  'v':      { ipa: 'v',   arpa: 'V'   },  // sounds like the "v" in "average"
  'w':      { ipa: 'w',   arpa: 'W'   },  // sounds like the "w" in "win"
  'z':      { ipa: 'z',   arpa: 'Z'   },  // sounds like the "z" in "zoo"
  '/Z/':    { ipa: 'ʒ',   arpa: 'ZH'  },  // sounds like the "s" in "vision"

  'A':      { ipa: 'a'                },  // sounds like the "a" in "ami"
  'e':      { ipa: 'e'                },  // or ɛ
  'i':      { ipa: 'i'                },  // or ɪ
  'N':      { ipa: 'n'                },  //            sounds like the "n" in "Francoise" - 'nasalisation',
  'o':      { ipa: 'o',               },
  'R':      { ipa: 'ʁ',               },  //            sounds like the "r" in "Der"
  'S':      { ipa: 's',               },
  'u':      { ipa: 'u',               },
  'V':      { ipa: 'v',               },  // or β, ʋ
  'W':      { ipa: 'w',               },
  '/x/':    { ipa: 'x',               }, // sounds like the "ch" in "Bach"
  '/y/':    { ipa: 'ø'                }, // sounds like the "eu" in "cordon bleu"    ///! œ
  'Y':      { ipa: 'y',               }, //            sounds like the "u" in "Dubois"
  '/z/':    { ipa: 'ts',              },
  'Z':      { ipa: 'z'                },

  'a':      { ipa: 'ɑ'                },
  'c':      { ipa: 'k'                },
  'x':      { ipa: 'ks'               },
};
