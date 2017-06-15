import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import resolve from 'rollup-plugin-node-resolve';


export default {
  entry: 'src/js/index.js',
  format: 'umd',
  // format: 'iife',
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    }),
    uglify({
      compress: {
          collapse_vars: true,
          drop_console: true,
          pure_funcs: ["Object.defineProperty"]
      }
    })
  ],
  dest: 'dist/js/bundle.js',
  sourceMap: true
};
