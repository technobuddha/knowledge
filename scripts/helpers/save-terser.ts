import { empty } from '@technobuddha/library';
import { minify } from 'terser';

import { type SaveOptions, saveRaw } from './save-raw.ts';

export async function saveTerser(
  filePath: string,
  code: string | string[],
  options: SaveOptions = {},
): Promise<void> {
  const min = await minify(Array.isArray(code) ? code.join('\n') : code, {
    ecma: 2020,
    module: true,
    mangle: false,
    compress: { defaults: false },
  });

  return saveRaw(filePath, min.code ?? empty, options);
}
