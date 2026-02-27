import { LogoStyled } from './styles'
import type { WidthType } from '@/types'
import { useTheme } from 'styled-components'
import { getLogoLight, getLogoDark } from '@/utils/logoLoader'

type LogoProps = {
  className?: string
} & WidthType

const Logo = ({ className, $lgWidth, $mdWidth, $smWidth }: LogoProps) => {
  const theme = useTheme()
  const isDarkTheme = theme.bgColor === '#011F1F'

  return (
    <LogoStyled
      className={className}
      $lgWidth={$lgWidth}
      $mdWidth={$mdWidth}
      $smWidth={$smWidth}
    >
      <img src={isDarkTheme ? getLogoDark() : getLogoLight()} alt="Logo" />
    </LogoStyled>
  )
}

export default Logo
