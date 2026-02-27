import type { FontSizeType } from '@/types'
import { TitleStyled } from './styles'

export type TitleType = {
  children: string
  className?: string
  color: 'primary' | 'secondary'
} & FontSizeType

const Title = ({
  children,
  className,
  color,
  $lgFontSize,
  $mdFontSize,
  $smFontSize
}: TitleType) => (
  <TitleStyled
    className={className}
    color={color}
    $lgFontSize={$lgFontSize}
    $mdFontSize={$mdFontSize}
    $smFontSize={$smFontSize}
  >
    {children}
  </TitleStyled>
)

export default Title
