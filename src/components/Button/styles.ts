import styled from 'styled-components'
import { fontSizeToRem, mdScreen, smScreen, type FontSize } from '@/types'

type ButtonStyle = {
  id?: string | undefined
  disabled?: boolean | undefined
  as?: React.ElementType | undefined
  type?: 'button' | 'submit' | 'reset' | undefined
  $lgWidth?: number | undefined
  $mdWidth?: number | undefined
  $smWidth?: number | undefined
  $lgFontSize?: FontSize | undefined
  $mdFontSize?: FontSize | undefined
  $smFontSize?: FontSize | undefined
}

export const ButtonStyled = styled.button<ButtonStyle>`
  width: ${(props) => props.$lgWidth || 100}%;
  font-size: ${(props) => fontSizeToRem(props.$lgFontSize || 16)};
  font-weight: 500;
  color: ${(props) => props.theme.bgColor};
  background-color: ${(props) => props.theme.primaryColor};
  padding: 12px 8px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.primaryColor};
    background-color: ${(props) => props.theme.secondaryColor};
  }

  ${mdScreen} {
    width: ${(props) => props.$mdWidth || props.$lgWidth || 100}%;
    font-size: ${(props) =>
      fontSizeToRem(props.$mdFontSize || props.$lgFontSize || 16)};
  }

  ${smScreen} {
    width: ${(props) =>
      props.$smWidth || props.$mdWidth || props.$lgWidth || 100}%;
    font-size: ${(props) =>
      fontSizeToRem(
        props.$smFontSize || props.$mdFontSize || props.$lgFontSize || 16
      )};
  }
`
