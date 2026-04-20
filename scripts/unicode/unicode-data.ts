export type UnicodeData = {
  character: string;
  codePoint: number;
  name: string;
  display: string;
  category: string;
  combining?: number;
  bidirectional: string;
  decomposition?: string;
  decimalDigit?: number;
  digit?: number;
  numeric?: string;
  mirrored?: boolean;
  unicode1Name?: string;
  comment?: string;
  upperCase?: string;
  lowerCase?: string;
  titleCase?: string;
};
