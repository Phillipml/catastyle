import styled from 'styled-components'
import { mdScreen, smScreen, fontSizeToRem, type FontSize } from '@/types'

type LabelStyledProps = {
  $lgFontSize?: FontSize | undefined
  $mdFontSize?: FontSize | undefined
  $smFontSize?: FontSize | undefined
}

export const LabelStyled = styled.label<LabelStyledProps>`
  font-size: ${(props) => fontSizeToRem(props.$lgFontSize || 16)};
  font-weight: 500;
  color: ${(props) => props.theme.primaryColor};
  margin-bottom: 4px;
  display: block;

  ${mdScreen} {
    font-size: ${(props) =>
      fontSizeToRem(props.$mdFontSize || props.$lgFontSize || 16)};
  }

  ${smScreen} {
    font-size: ${(props) =>
      fontSizeToRem(
        props.$smFontSize || props.$mdFontSize || props.$lgFontSize || 16
      )};
  }
`
