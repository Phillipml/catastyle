import styled from 'styled-components'
import { fontSizeToRem, mdScreen, smScreen, type FontSize } from '@/types'

type LinkStyledProps = {
  $lgFontSize?: FontSize | undefined
  $mdFontSize?: FontSize | undefined
  $smFontSize?: FontSize | undefined
  $target?: '_blank' | '_self'
  color?: 'primary' | 'secondary'
}

export const LinkStyled = styled.a<LinkStyledProps>`
  color: ${(props) =>
    props.color === 'primary'
      ? props.theme.primaryColor
      : props.color === 'secondary'
        ? props.theme.secondaryColor
        : props.theme.linkColor};
  text-decoration: none;
  font-size: ${(props) => fontSizeToRem(props.$lgFontSize || 16)};
  font-weight: normal;
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 0 100%;
  background-size: 0% 2px;
  background-repeat: no-repeat;
  transition:
    background-size 0.2s,
    background-position 0s 0.2s;

  &:hover {
    background-position: 100% 100%;
    background-size: 100% 2px;
  }
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
