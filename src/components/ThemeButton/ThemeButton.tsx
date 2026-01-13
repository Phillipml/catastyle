import { ThemeButton as ThemeButtonStyled } from './styles'
import LogoLight from '@/assets/logos/light-theme.svg'
import LogoDark from '@/assets/logos/dark-theme.svg'
import { useTheme } from 'styled-components'

type ThemeButtonType = {
  onClick?: () => void
}

const ThemeButton = ({ onClick }: ThemeButtonType) => {
  const theme = useTheme()
  return (
    <ThemeButtonStyled onClick={onClick}>
      <img
        src={theme.bgColor === '#011F1F' ? LogoLight : LogoDark}
        alt="Theme Button"
      />
    </ThemeButtonStyled>
  )
}

export default ThemeButton
