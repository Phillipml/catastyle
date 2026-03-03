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
  centered?: boolean
  iconLight?: string
  iconDark?: string
}
const Main = ({
  children,
  className,
  position,
  darkTheme: darkThemeProp,
  lightTheme: lightThemeProp,
  centered = true,
  iconLight,
  iconDark
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
      <MainContainer className={className} $centered={centered}>
        <ThemeButton
          onClick={toggleTheme}
          {...(position !== undefined && { position })}
          {...(iconLight !== undefined && { iconLight })}
          {...(iconDark !== undefined && { iconDark })}
        />
        {children}
      </MainContainer>
    </ThemeProvider>
  )
}

export default Main
