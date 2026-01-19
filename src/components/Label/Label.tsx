import React from 'react'
import type { FontSizeType } from '@/types'
import { LabelStyled } from './styles'

export type LabelType = {
  htmlFor: string
  children: React.ReactNode
  color?: 'primary' | 'secondary'
} & FontSizeType

const Label = ({
  htmlFor,
  children,
  $lgFontSize,
  $mdFontSize,
  $smFontSize
}: LabelType) => (
  <LabelStyled
    htmlFor={htmlFor}
    $lgFontSize={$lgFontSize}
    $mdFontSize={$mdFontSize}
    $smFontSize={$smFontSize}
  >
    {children}
  </LabelStyled>
)

export default Label
