import { LogoStyled } from './styles'
import type { WidthType } from '@/types'
import { useTheme } from 'styled-components'
import { getLogoLight, getLogoDark } from '@/utils/logoLoader'

type LogoType = WidthType

const Logo = (props: LogoType) => {
  const theme = useTheme()
  const isDarkTheme = theme.bgColor === '#011F1F'

  return (
    <LogoStyled {...props}>
      <img src={isDarkTheme ? getLogoDark() : getLogoLight()} alt="Logo" />
    </LogoStyled>
  )
}

export default Logo
