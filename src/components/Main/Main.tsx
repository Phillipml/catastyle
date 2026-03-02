import GlobalStyle, { MainContainer } from '@/styles/global'
import { ThemeProvider } from 'styled-components'
import type { DefaultTheme } from 'styled-components'
import { useState } from 'react'
import ThemeButton from '@/components/ThemeButton/ThemeButton'
import { getDarkTheme, getLightTheme } from '@/utils/themeLoader'
import type { ThemeButtonPosition } from '../ThemeButton/styles'

export type MainType = {
  children: React.ReactNode
  className?: string
  position?: ThemeButtonPosition
  darkTheme?: DefaultTheme | null
  lightTheme?: DefaultTheme | null
}
const Main = ({
  children,
  className,
  position,
  darkTheme: darkThemeProp,
  lightTheme: lightThemeProp
}: MainType) => {
  const [darkTheme, setDarkTheme] = useState(false)
  function toggleTheme() {
    setDarkTheme(!darkTheme)
  }
  const theme = darkTheme
    ? (darkThemeProp ?? getDarkTheme())
    : (lightThemeProp ?? getLightTheme())
  return (
    <ThemeProvider theme={{ ...theme, isDark: darkTheme }}>
      <GlobalStyle />
      <MainContainer className={className}>
        <ThemeButton
          onClick={toggleTheme}
          {...(position !== undefined && { position })}
        />
        {children}
      </MainContainer>
    </ThemeProvider>
  )
}

export default Main
