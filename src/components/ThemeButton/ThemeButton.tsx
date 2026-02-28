import { ThemeButton as ThemeButtonStyled } from './styles'
import { useTheme } from 'styled-components'
import { getIconDark, getIconLight } from '@/utils/logoLoader'

type ThemeButtonType = {
  className?: string
  onClick?: () => void
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
}
const ThemeButton = ({
  className,
  onClick,
  position = 'bottom-right'
}: ThemeButtonType) => {
  const theme = useTheme()
  const isDarkTheme = theme.bgColor === '#011F1F'
  return (
    <ThemeButtonStyled
      className={className}
      onClick={onClick}
      $position={position}
    >
      <img
        src={isDarkTheme ? getIconLight() : getIconDark()}
        alt="Theme Button"
      />
    </ThemeButtonStyled>
  )
}

export default ThemeButton
