import { LogoStyled } from './styles'
import LogoLight from '@/assets/logos/light-theme.svg'
import LogoDark from '@/assets/logos/dark-theme.svg'
import type { WidthType } from '@/types'
import { useTheme } from 'styled-components'

type LogoType = WidthType

const Logo = (props: LogoType) => {
  const theme = useTheme()
  const isDarkTheme = theme.bgColor === '#011F1F'

  return (
    <LogoStyled {...props}>
      <img src={isDarkTheme ? LogoDark : LogoLight} alt="Logo" />
    </LogoStyled>
  )
}

export default Logo
