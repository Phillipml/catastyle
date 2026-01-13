import styled from 'styled-components'
import { fontSizeToRem, mdScreen, smScreen, type FontSize } from '@/types'

type TextStyledProps = {
  $lgFontSize?: FontSize | undefined
  $mdFontSize?: FontSize | undefined
  $smFontSize?: FontSize | undefined
  as?: 'p' | 'span'
  color?: 'primary' | 'secondary'
}

export const TextStyled = styled.p<TextStyledProps>`
  font-size: ${(props) => fontSizeToRem(props.$lgFontSize || 16)};
  color: ${(props) =>
    props.color === 'primary'
      ? props.theme.primaryColor
      : props.theme.secondaryColor};

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
