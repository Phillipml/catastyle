import type { DefaultTheme } from 'styled-components'
import DarkThemeDefault from '@/themes/dark'
import LightThemeDefault from '@/themes/light'
import path from 'path'
import { existsSync } from 'fs'

function tryLoadUserTheme(filename: string): DefaultTheme | null {
  if (typeof window !== 'undefined') {
    return null
  }

  try {
    const userProjectRoot = process.cwd()
    const userThemePath = path.join(
      userProjectRoot,
      'src',
      'catastyle',
      'themes',
      `${filename}.ts`
    )

    if (existsSync(userThemePath)) {
      delete require.cache[require.resolve(userThemePath)]
      const userTheme = require(userThemePath)
      return userTheme.default || userTheme
    }
  } catch {
    return null
  }

  return null
}

export function getDarkTheme(): DefaultTheme {
  const userTheme = tryLoadUserTheme('dark')
  return userTheme || DarkThemeDefault
}

export function getLightTheme(): DefaultTheme {
  const userTheme = tryLoadUserTheme('light')
  return userTheme || LightThemeDefault
}
