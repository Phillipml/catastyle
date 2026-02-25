/* eslint-disable react-refresh/only-export-components */
import { render, type RenderOptions } from '@testing-library/react'
import { DarkTheme } from '@/themes'
import type { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'

function ProvidersWrapper({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={DarkTheme}>{children}</ThemeProvider>
}

function renderWithTheme(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) {
  return render(ui, {
    wrapper: ProvidersWrapper,
    ...options
  })
}
export * from '@testing-library/react'
export { renderWithTheme }
