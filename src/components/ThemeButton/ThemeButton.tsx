import { ThemeButton as ThemeButtonStyled } from './styles'
import { useTheme } from 'styled-components'
import { getIconDark, getIconLight } from '@/utils/logoLoader'

type ThemeButtonType = {
  className?: string
  onClick?: () => void
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
  iconLight?: string
  iconDark?: string
}
const ThemeButton = ({
  className,
  onClick,
  position = 'bottom-right',
  iconLight,
  iconDark
}: ThemeButtonType) => {
  const theme = useTheme()
  const isDarkTheme = theme.isDark === true
  const src = isDarkTheme
    ? (iconLight ?? getIconLight())
    : (iconDark ?? getIconDark())
  return (
    <ThemeButtonStyled
      className={className}
      onClick={onClick}
      $position={position}
    >
      <img src={src} alt="Theme Button" />
    </ThemeButtonStyled>
  )
}

export default ThemeButton
