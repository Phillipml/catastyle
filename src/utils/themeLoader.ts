import type { DefaultTheme } from 'styled-components'
import DarkThemeDefault from '@/themes/dark'
import LightThemeDefault from '@/themes/light'
import path from 'path'

function tryLoadUserThemeConfig(): {
  darkTheme: DefaultTheme | null
  lightTheme: DefaultTheme | null
} | null {
  if (typeof window !== 'undefined') {
    return null
  }

  try {
    const userProjectRoot = process.cwd()
    const configPath = path.join(
      userProjectRoot,
      'src',
      'catastyle',
      'config',
      'catastyle.config.ts'
    )

    try {
      const resolvedPath = require.resolve(configPath)
      delete require.cache[resolvedPath]
      const config = require(configPath)
      return {
        darkTheme: config.darkTheme ?? null,
        lightTheme: config.lightTheme ?? null
      }
    } catch {
      return null
    }
  } catch {
    return null
  }
}

export function getDarkTheme(): DefaultTheme {
  const userConfig = tryLoadUserThemeConfig()
  return userConfig?.darkTheme ?? DarkThemeDefault
}

export function getLightTheme(): DefaultTheme {
  const userConfig = tryLoadUserThemeConfig()
  return userConfig?.lightTheme ?? LightThemeDefault
}
