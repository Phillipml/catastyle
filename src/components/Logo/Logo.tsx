import { LogoStyled } from './styles'
import type { WidthType } from '@/types'
import { useTheme } from 'styled-components'
import { getLogoLight, getLogoDark } from '@/utils/logoLoader'

type LogoProps = {
  className?: string
  logoLight?: string
  logoDark?: string
} & WidthType

const Logo = ({
  className,
  $lgWidth,
  $mdWidth,
  $smWidth,
  logoLight,
  logoDark
}: LogoProps) => {
  const theme = useTheme()
  const isDarkTheme = theme.isDark === true
  const src = isDarkTheme
    ? (logoDark ?? getLogoDark())
    : (logoLight ?? getLogoLight())

  return (
    <LogoStyled
      className={className}
      $lgWidth={$lgWidth}
      $mdWidth={$mdWidth}
      $smWidth={$smWidth}
    >
      <img src={src} alt="Logo" />
    </LogoStyled>
  )
}

export default Logo
