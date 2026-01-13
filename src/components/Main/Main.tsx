import GlobalStyle, { MainContainer } from '@/styles/global'
import { ThemeProvider } from 'styled-components'
import DarkTheme from '@/themes/dark'
import LightTheme from '@/themes/light'
import { useState } from 'react'
import ThemeButton from '@/components/ThemeButton/ThemeButton'

export type MainType = {
  children: React.ReactNode
}
const Main = ({ children }: MainType) => {
  const [darkTheme, setDarkTheme] = useState(false)
  function toggleTheme() {
    setDarkTheme(!darkTheme)
  }
  return (
    <ThemeProvider theme={darkTheme ? DarkTheme : LightTheme}>
      <GlobalStyle />
      <MainContainer>
        <ThemeButton onClick={toggleTheme} />
        {children}
      </MainContainer>
    </ThemeProvider>
  )
}

export default Main
