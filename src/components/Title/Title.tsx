import type { FontSizeType } from '@/types'
import { TitleStyled } from './styles'

export type TitleType = {
  children: string
  color: 'primary' | 'secondary'
} & FontSizeType

const Title = ({
  children,
  color,
  $lgFontSize,
  $mdFontSize,
  $smFontSize
}: TitleType) => (
  <TitleStyled
    color={color}
    $lgFontSize={$lgFontSize}
    $mdFontSize={$mdFontSize}
    $smFontSize={$smFontSize}
  >
    {children}
  </TitleStyled>
)

export default Title
