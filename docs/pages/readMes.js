import { sync as globSync } from 'glob';
import { readFileSync } from 'fs';
import { resolve as resolvePath } from 'path';

export default () => {
  const readMePaths = globSync(
    resolvePath(__dirname, '../../../*/README.md'), // resolved from within .next/dist
    {
      dot: false,
      nodir: true,
      ignore: ['**/node_modules', '**/.next', '**/pages', '**/static'],
    },
  );

  return readMePaths.map(
    readmePath => readFileSync(readmePath, { encoding: 'utf8' }),
  );
};
