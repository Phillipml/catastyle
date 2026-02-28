import { ThemeButton as ThemeButtonStyled } from './styles'
import { useTheme } from 'styled-components'
import { getIconDark, getIconLight } from '@/utils/logoLoader'

type ThemeButtonType = {
  className?: string
  onClick?: () => void
}
const ThemeButton = ({ className, onClick }: ThemeButtonType) => {
  const theme = useTheme()
  const isDarkTheme = theme.bgColor === '#011F1F'
  return (
    <ThemeButtonStyled className={className} onClick={onClick}>
      <img
        src={isDarkTheme ? getIconDark() : getIconLight()}
        alt="Theme Button"
      />
    </ThemeButtonStyled>
  )
}

export default ThemeButton
