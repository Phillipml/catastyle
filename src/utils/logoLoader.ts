import LogoLightDefault from '@/assets/logos/light-theme.svg'
import LogoDarkDefault from '@/assets/logos/dark-theme.svg'
import path from 'path'
import { existsSync } from 'fs'

function tryLoadUserLogo(filename: string): string | null {
  if (typeof window !== 'undefined') {
    return null
  }

  try {
    const userProjectRoot = process.cwd()
    const userLogoPath = path.join(
      userProjectRoot,
      'src',
      'catastyle',
      'logo',
      filename
    )

    if (existsSync(userLogoPath)) {
      return path.resolve(userLogoPath)
    }
  } catch {
    return null
  }

  return null
}

export function getLogoLight(): string {
  const userLogo = tryLoadUserLogo('light-theme.svg')
  return userLogo || LogoLightDefault
}

export function getLogoDark(): string {
  const userLogo = tryLoadUserLogo('dark-theme.svg')
  return userLogo || LogoDarkDefault
}
