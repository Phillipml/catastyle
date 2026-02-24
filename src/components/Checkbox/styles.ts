import styled from 'styled-components'
import { mdScreen, smScreen, type WidthType } from '@/types'
import { InputStyled } from '@/components/Input/styles'

type CheckLabelStyled = {
  display?: string | undefined
} & WidthType

export const CheckLabel = styled.label<CheckLabelStyled>`
  width: ${(props) => props.$lgWidth || 100}%;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;

  ${mdScreen} {
    width: ${(props) => props.$mdWidth || props.$lgWidth || 100}%;
    justify-content: center;
  }

  ${smScreen} {
    width: ${(props) =>
      props.$smWidth || props.$mdWidth || props.$lgWidth || 100}%;
    justify-content: center;
  }
`

export const CheckInput = styled(InputStyled)<CheckLabelStyled>`
  width: ${(props) => props.$lgWidth || 5}%;
  height: 20px;
  margin: 0;
  cursor: pointer;
  box-shadow: none !important;

  ${mdScreen} {
    width: ${(props) => props.$mdWidth || props.$lgWidth || 5}%;
  }

  ${smScreen} {
    width: ${(props) =>
      props.$smWidth || props.$mdWidth || props.$lgWidth || 5}%;
  }
`
