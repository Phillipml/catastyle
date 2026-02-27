import { ThemeButton as ThemeButtonStyled } from './styles'
import LogoLight from '@/assets/logos/light-theme.svg'
import LogoDark from '@/assets/logos/dark-theme.svg'
import { useTheme } from 'styled-components'

type ThemeButtonType = {
  className?: string
  onClick?: () => void
}

const ThemeButton = ({ className, onClick }: ThemeButtonType) => {
  const theme = useTheme()
  return (
    <ThemeButtonStyled className={className} onClick={onClick}>
      <img
        src={theme.bgColor === '#011F1F' ? LogoLight : LogoDark}
        alt="Theme Button"
      />
    </ThemeButtonStyled>
  )
}

export default ThemeButton
