import type { FontSizeType, WidthType } from '@/types'
import { ButtonStyled } from './styles'

export type ButtonType = {
  children: React.ReactNode
  className?: string
  id?: string
  onClick?: () => void
  disabled?: boolean
  as?: React.ElementType
  type?: 'button' | 'submit' | 'reset'
} & WidthType &
  FontSizeType

const Button = ({
  children,
  className,
  onClick,
  disabled,
  $lgWidth,
  $mdWidth,
  $smWidth,
  $lgFontSize,
  $mdFontSize,
  $smFontSize,
  as,
  type,
  id
}: ButtonType) => (
  <ButtonStyled
    className={className}
    onClick={onClick}
    disabled={disabled}
    $lgWidth={$lgWidth}
    $mdWidth={$mdWidth}
    $smWidth={$smWidth}
    $lgFontSize={$lgFontSize}
    $mdFontSize={$mdFontSize}
    $smFontSize={$smFontSize}
    as={as}
    type={type}
    id={id}
  >
    {children}
  </ButtonStyled>
)

export default Button
