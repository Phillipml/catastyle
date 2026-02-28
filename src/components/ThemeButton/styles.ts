import styled from 'styled-components'
import { ButtonStyled } from '@/components/Button/styles'

export const ThemeButton = styled(ButtonStyled)`
  position: fixed;
  width: 3rem;
  height: 3rem;
  top: 1.25rem;
  right: 1.25rem;
  z-index: 9999;
  border-radius: 50%;
  padding: 1%;
  display: flex;
  align-items: center;
  justify-content: center;
  & > img {
    width: 100%;
    height: 100%;
  }
  &:hover {
    background-color: ${(props) => props.theme.tertiaryColor};
    box-shadow: 0 0 10px 0 ${(props) => props.theme.primaryColor};
  }
`
