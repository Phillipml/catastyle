import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  font-family: "Inter", sans-serif;
}

html, body {
  min-height: 100vh;
}

body{
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.primaryColor};
`
export default GlobalStyle

export const MainContainer = styled.main<{ $centered?: boolean }>`
  width: ${(props) => (props.$centered !== false ? '100vw' : '100%')};
  max-width: ${(props) => (props.$centered !== false ? '1440px' : 'none')};
  margin: ${(props) => (props.$centered !== false ? '0 auto' : '0')};
  min-height: ${(props) => (props.$centered !== false ? '100vh' : 'auto')};
  height: ${(props) => (props.$centered !== false ? '100vh' : 'auto')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) =>
    props.$centered !== false ? 'center' : 'flex-start'};
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`
