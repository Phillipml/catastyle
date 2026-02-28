import LogoLightDefault from '@/assets/logos/light-theme.svg'
import LogoDarkDefault from '@/assets/logos/dark-theme.svg'
import IconLightDefault from '@/assets/icon/icon-light-theme.svg'
import IconDarkDefault from '@/assets/icon/icon-dark-theme.svg'

function tryLoadUserLogoConfig(): {
  logoLight: string
  logoDark: string
  iconLight: string
  iconDark: string
} | null {
  if (typeof window !== 'undefined' || typeof process === 'undefined') {
    return null
  }

  try {
    const path = require('path')
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
        logoLight: config.logoLight,
        logoDark: config.logoDark,
        iconLight: config.iconLight,
        iconDark: config.iconDark
      }
    } catch {
      return null
    }
  } catch {
    return null
  }
}

export function getLogoLight(): string {
  const userConfig = tryLoadUserLogoConfig()

  if (userConfig && userConfig.logoLight !== 'default') {
    return userConfig.logoLight
  }

  return LogoLightDefault
}

export function getLogoDark(): string {
  const userConfig = tryLoadUserLogoConfig()

  if (userConfig && userConfig.logoDark !== 'default') {
    return userConfig.logoDark
  }

  return LogoDarkDefault
}
export function getIconLight(): string {
  const userConfig = tryLoadUserLogoConfig()

  if (userConfig && userConfig.iconLight !== 'default') {
    return userConfig.iconLight
  }

  return IconLightDefault
}

export function getIconDark(): string {
  const userConfig = tryLoadUserLogoConfig()

  if (userConfig && userConfig.iconDark !== 'default') {
    return userConfig.iconDark
  }

  return IconDarkDefault
}
