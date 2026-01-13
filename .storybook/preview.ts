import type { Preview } from '@storybook/react-vite'
import { ThemeProvider } from 'styled-components'
import LightTheme from '../src/themes/light'
import DarkTheme from '../src/themes/dark'
import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  * {
    font-family: 'Inter', sans-serif;
  }

  #storybook-root,
  .docs-story,
  .docs-story > div,
  .sb-story,
  .sb-main-padded {
    background-color: ${(props) => props.theme.bgColor} !important;
    color: ${(props) => props.theme.primaryColor} !important;
  }

  .sb-show-main {
    background-color: ${(props) => props.theme.bgColor} !important;
  }

  .sb-show-main iframe {
    background-color: ${(props) => props.theme.bgColor} !important;
  }
`

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    backgrounds: {
      disable: true,
      default: 'custom',
      values: [
        {
          name: 'custom',
          value: 'transparent'
        }
      ]
    }
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme === 'dark' ? DarkTheme : LightTheme

      return React.createElement(
        ThemeProvider,
        { theme },
        React.createElement(React.Fragment, null, [
          React.createElement(GlobalStyle, { key: 'global-style' }),
          React.createElement(Story, { key: 'story' })
        ])
      )
    }
  ],
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'circlehollow', title: 'Light' },
          { value: 'dark', icon: 'circle', title: 'Dark' }
        ],
        showName: true
      }
    }
  }
}

export default preview
