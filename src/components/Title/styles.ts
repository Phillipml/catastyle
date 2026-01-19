import styled from 'styled-components'
import { fontSizeToRem, mdScreen, smScreen, type FontSize } from '@/types'

type TitleStyledProps = {
  $lgFontSize?: FontSize | undefined
  $mdFontSize?: FontSize | undefined
  $smFontSize?: FontSize | undefined
  color: 'primary' | 'secondary'
}

export const TitleStyled = styled.h1<TitleStyledProps>`
  font-size: ${(props) => fontSizeToRem(props.$lgFontSize || 32)};
  font-weight: 600;
  color: ${(props) =>
    props.color === 'primary'
      ? props.theme.primaryColor
      : props.theme.secondaryColor};

  ${mdScreen} {
    font-size: ${(props) =>
      fontSizeToRem(props.$mdFontSize || props.$lgFontSize || 32)};
  }

  ${smScreen} {
    font-size: ${(props) =>
      fontSizeToRem(
        props.$smFontSize || props.$mdFontSize || props.$lgFontSize || 32
      )};
  }
`
