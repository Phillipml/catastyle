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
  gap: 12px;
  cursor: pointer;
  line-height: 1.5;

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
  min-width: 20px;
  height: 20px;
  margin: 0;
  cursor: pointer;
  box-shadow: none !important;
  flex-shrink: 0;
  align-self: center;
  vertical-align: middle;

  ${mdScreen} {
    width: ${(props) => props.$mdWidth || props.$lgWidth || 5}%;
  }

  ${smScreen} {
    width: ${(props) =>
      props.$smWidth || props.$mdWidth || props.$lgWidth || 5}%;
  }
`
