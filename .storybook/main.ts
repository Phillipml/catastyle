
import type { StorybookConfig } from '@storybook/react-vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  framework: {
    name: '@storybook/react-vite',
    options: {}
  },

  viteFinal: async (config) => {
    const srcPath = path.resolve(__dirname, '../src')
    
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': srcPath,
        '@/types': path.resolve(srcPath, 'types/index.ts')
      }
      
      if (!config.resolve.extensions) {
        config.resolve.extensions = ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json']
      }
    }
    
    if (!config.optimizeDeps) {
      config.optimizeDeps = {}
    }
    
    config.optimizeDeps.include = [
      ...(config.optimizeDeps.include || []),
      'styled-components'
    ]
    
    if (!config.optimizeDeps.exclude) {
      config.optimizeDeps.exclude = []
    }
    
    config.optimizeDeps.force = true
    
    if (!config.esbuild) {
      config.esbuild = {}
    }
    
    return config
  }
}

export default config