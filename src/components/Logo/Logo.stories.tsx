import type { Meta, StoryObj } from '@storybook/react-vite'
import Logo from './Logo'

const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Logo que alterna automaticamente entre as versões claro/escuro conforme o tema atual (use a toolbar **Theme** para trocar). Os assets podem ser customizados via `src/catastyle/config/logo.config.ts`.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    $lgWidth: {
      control: { type: 'number', min: 0, max: 100 },
      description: 'Largura (%) em telas grandes'
    },
    $mdWidth: {
      control: { type: 'number', min: 0, max: 100 },
      description: 'Largura (%) em telas médias'
    },
    $smWidth: {
      control: { type: 'number', min: 0, max: 100 },
      description: 'Largura (%) em telas pequenas'
    }
  }
}

export default meta
type Story = StoryObj<typeof Logo>

export const Default: Story = {
  args: {
    $lgWidth: 50,
    $mdWidth: 50,
    $smWidth: 50
  }
}

export const FullWidth: Story = {
  args: {
    $lgWidth: 100,
    $mdWidth: 100,
    $smWidth: 100
  }
}
