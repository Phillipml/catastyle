import styled, { css } from 'styled-components'
import { ButtonStyled } from '@/components/Button/styles'
type Position = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
type ButtonPosition = { $position?: Position }
const position = [
  {
    'top-right': css`
      top: 1.25rem;
      right: 1.25rem;
    `
  },
  {
    'top-left': css`
      top: 1.25rem;
      left: 1.25rem;
    `
  },
  {
    'bottom-right': css`
      bottom: 1.25rem;
      right: 1.25rem;
    `
  },
  {
    'bottom-left': css`
      bottom: 1.25rem;
      left: 1.25rem;
    `
  }
]
const getPosition = (key: Position) =>
  (
    position.find((pos) => key in pos) as
      | Record<Position, ReturnType<typeof css>>
      | undefined
  )?.[key]
export const ThemeButton = styled(ButtonStyled)<ButtonPosition>`
  position: fixed;
  width: 3rem;
  height: 3rem;
  ${(props) => getPosition(props.$position ?? 'bottom-right')}
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
