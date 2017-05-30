import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
  entry: './src/index.js',
  external: ['prop-types', 'styled-components', 'polished'],
  plugins: [
    nodeResolve({
      module: false,
      jsnext: false,
      main: true,
    }),
    commonjs(),
    babel({
      babelrc: false,
      presets: [
        [
          'env',
          {
            modules: false,
            targets: {
              node: 6,
              browsers: ['last 2 versions', '> 5%'],
            },
          },
        ],
        'stage-0',
      ],
      plugins: [
        'external-helpers',
        'styled-components',
      ],
    }),
  ],
  sourceMap: true,
  format: 'cjs',
  dest: './dist/index.js',
};
