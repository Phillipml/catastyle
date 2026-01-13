import styled from 'styled-components'
import type { WidthType } from '@/types'
import { mdScreen, smScreen } from '@/types'

export const LogoStyled = styled.div<WidthType>`
  width: ${(props) => props.$lgWidth || 100}%;
  & > img {
    width: 100%;
    height: auto;
    display: block;
  }

  ${mdScreen} {
    width: ${(props) => props.$mdWidth || props.$lgWidth || 100}%;
  }

  ${smScreen} {
    width: ${(props) =>
      props.$smWidth || props.$mdWidth || props.$lgWidth || 100}%;
  }
`
