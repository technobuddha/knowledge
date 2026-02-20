import path from 'node:path';

import { err, locatePackageRoot } from '@technobuddha/library/node';

const root = await locatePackageRoot();
if (!root) {
  err('Could not find root directory');
  process.exit(1);
}

export const reference = path.join(root, 'reference');
export const documentation = path.join(root, 'documentation');
export const data = path.join(root, 'dist', '@data');
