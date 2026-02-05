export function uEscape(codePoint: number): string {
  return codePoint <= 0xffff ?
      `\\u${codePoint.toString(16).toUpperCase().padStart(4, '0')}`
    : `\\u{${codePoint.toString(16).toUpperCase()}}`;
}
