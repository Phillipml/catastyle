import { defineConfig } from 'tsup'
import { resolve } from 'path'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom', 'styled-components'],
  treeshake: true,
  esbuildOptions(options) {
    options.alias = {
      '@': resolve(__dirname, './src'),
    }
  },
})