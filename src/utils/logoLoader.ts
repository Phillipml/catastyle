import LogoLightDefault from '@/assets/logos/light-theme.svg'
import LogoDarkDefault from '@/assets/logos/dark-theme.svg'

function tryLoadUserLogoConfig(): {
  logoLight: string
  logoDark: string
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
      'logo.config.ts'
    )

    try {
      const resolvedPath = require.resolve(configPath)
      delete require.cache[resolvedPath]
      const config = require(configPath)
      return {
        logoLight: config.logoLight,
        logoDark: config.logoDark
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
