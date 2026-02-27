import GlobalStyle, { MainContainer } from '@/styles/global'
import { ThemeProvider } from 'styled-components'
import { useState } from 'react'
import ThemeButton from '@/components/ThemeButton/ThemeButton'
import { getDarkTheme, getLightTheme } from '@/utils/themeLoader'

export type MainType = {
  children: React.ReactNode
  className?: string
}
const Main = ({ children, className }: MainType) => {
  const [darkTheme, setDarkTheme] = useState(false)
  function toggleTheme() {
    setDarkTheme(!darkTheme)
  }
  return (
    <ThemeProvider theme={darkTheme ? getDarkTheme() : getLightTheme()}>
      <GlobalStyle />
      <MainContainer className={className}>
        <ThemeButton onClick={toggleTheme} />
        {children}
      </MainContainer>
    </ThemeProvider>
  )
}

export default Main
