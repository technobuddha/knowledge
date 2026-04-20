import path from 'node:path';

import { err, locatePackageRoot } from '@technobuddha/library';

const root = await locatePackageRoot();
if (!root) {
  err('Could not find root directory');
  process.exit(1);
}

export const externalReference = path.join(root, 'reference', 'external');
export const documentation = path.join(root, 'documentation');
export const data = path.join(root, 'dist', '@data');
