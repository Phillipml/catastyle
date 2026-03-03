import type { Meta, StoryObj } from '@storybook/react-vite'
import Main from './Main'
import { Title } from '@/components/Title/Title'
import { Text } from '@/components/Text/Text'
import { Button } from '@/components/Button/Button'
import { Logo } from '@/components/Logo/Logo'
import React from 'react'

const meta: Meta<typeof Main> = {
  title: 'Components/Main',
  component: Main,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Container principal que inclui ThemeProvider, GlobalStyle, MainContainer e ThemeButton. Com `centered={true}` (padrão) o layout fica centralizado, max-width 1440px e altura 100vh. Use a toolbar **Theme** para alternar tema.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    centered: {
      control: 'boolean',
      description:
        'Se true, layout centralizado (max-width 1440px, 100vh); se false, largura livre e conteúdo no topo'
    },
    position: {
      control: 'select',
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
      description: 'Posição do ThemeButton'
    }
  }
}

export default meta
type Story = StoryObj<typeof Main>

const defaultContent = (
  <>
    <Logo $lgWidth={50} $mdWidth={50} $smWidth={50} />
    <Title color="primary">Olá, Catastyle</Title>
    <Text as="p">
      Layout centralizado com ThemeButton. Use a toolbar Theme para trocar
      claro/escuro.
    </Text>
    <Button>Clique aqui</Button>
  </>
)

export const Default: Story = {
  args: {
    centered: true
  },
  render: (args) => <Main {...args}>{defaultContent}</Main>
}

export const NotCentered: Story = {
  args: {
    centered: false
  },
  render: (args) => (
    <Main {...args}>
      <Title color="primary">Main sem centralização</Title>
      <Text as="p">Container em largura total, conteúdo alinhado ao topo.</Text>
    </Main>
  )
}

export const ThemeButtonTopRight: Story = {
  args: {
    centered: true,
    position: 'top-right'
  },
  render: (args) => (
    <Main {...args}>
      <Title color="primary">ThemeButton no canto superior direito</Title>
      <Text as="p">Prop position="top-right"</Text>
    </Main>
  )
}
