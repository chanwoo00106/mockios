import babel from '@rollup/plugin-babel'
import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'esm',
    },
  ],
  plugins: [
    peerDepsExternal(),
    commonjs(),
    nodeResolve(),
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfig: './tsconfig.json',
    }),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**/*.(ts|tsx|js|jsx)',
      include: 'src/**/*.(ts|tsx|js|jsx)',
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.es', '.es6', '.mjs'],
    }),
    json()
  ],
}
