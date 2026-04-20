import { out, randomWeightedPick } from '@technobuddha/library';
import { db } from '@technobuddha/postgres';
import chalk from 'chalk';

async function chooseName(pos: 'first' | 'last'): Promise<void> {
  const sounds = (
    await db.many<{ sound: string; count: string }>(
      `SELECT ${pos}_sound as sound, count FROM ${pos}_sound`,
    )
  ).map((row) => ({ sound: row.sound, weight: Number(row.count) }));
  const { sound } = randomWeightedPick(sounds)!;

  const norms = (
    await db.many<{ norm: string; count: string }>(
      `SELECT ${pos}_norm as norm, count from ${pos}_norm WHERE ${pos}_sound = $[sound];`,
      { sound },
    )
  ).map((row) => ({ norm: row.norm, weight: Number(row.count) }));
  const { norm } = randomWeightedPick(norms)!;

  const variations = (
    await db.many<{ name: string; count: string }>(
      `SELECT ${pos} as name, count from ${pos}_name WHERE ${pos}_norm = $[norm];`,
      { norm },
    )
  ).map((row) => ({ variation: row.name, weight: Number(row.count) }));
  const { variation } = randomWeightedPick(variations)!;

  out(chalk.green(`${sound} of ${sounds.length}\n`));
  out(chalk.yellow(`${norm} of ${norms.length}\n`));
  out(chalk.whiteBright(`${variation} of ${variations.length}\n`));
}

await chooseName('last');
await chooseName('first');
