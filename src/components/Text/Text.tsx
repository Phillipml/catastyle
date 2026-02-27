import type { FontSizeType } from '@/types'
import { TextStyled } from './styles'

export type TextType = {
  as: 'p' | 'span'
  children: React.ReactNode
  className?: string
  color?: 'primary' | 'secondary'
} & FontSizeType

const Text = ({
  as,
  children,
  className,
  color = 'primary',
  $lgFontSize,
  $mdFontSize,
  $smFontSize
}: TextType) => (
  <TextStyled
    as={as}
    className={className}
    color={color}
    $lgFontSize={$lgFontSize}
    $mdFontSize={$mdFontSize}
    $smFontSize={$smFontSize}
  >
    {children}
  </TextStyled>
)

export default Text
