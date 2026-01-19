import styled from 'styled-components'
import {
  mdScreen,
  smScreen,
  fontSizeToRem,
  type WidthType,
  type FontSize
} from '@/types'

type InputWrapperProps = {
  display?: string
} & WidthType

type InputStyle = {
  type?: string
  $lgFontSize?: FontSize | undefined
  $mdFontSize?: FontSize | undefined
  $smFontSize?: FontSize | undefined
}

export const InputWrapper = styled.div<InputWrapperProps>`
  position: relative;
  display: ${(props) => props.display || 'block'};
  width: ${(props) => props.$lgWidth || 100}%;

  ${mdScreen} {
    width: ${(props) => props.$mdWidth || props.$lgWidth || 100}%;
  }

  ${smScreen} {
    width: ${(props) =>
      props.$smWidth || props.$mdWidth || props.$lgWidth || 100}%;
  }
`

export const InputStyled = styled.input<InputStyle>`
  width: 100%;
  padding: 16px 8px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.tertiaryColor};
  background-color: transparent;
  color: ${(props) => props.theme.primaryColor};
  font-size: ${(props) => fontSizeToRem(props.$lgFontSize || 16)};

  &:focus {
    outline: none;
    box-shadow: 0 0 4px 2px ${(props) => props.theme.tertiaryColor};
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

export const EyeButton = styled.button<InputStyle>`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.primaryColor};
  transition: color 0.2s ease;
  font-size: ${(props) => fontSizeToRem(props.$lgFontSize || 16)};

  svg {
    width: 20px;
    height: 20px;
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
