import type { Meta, StoryObj } from '@storybook/react-vite'
import ThemeButton from './ThemeButton'

const meta: Meta<typeof ThemeButton> = {
  title: 'Components/ThemeButton',
  component: ThemeButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Botão que exibe o ícone do tema oposto ao atual (para alternar). Use a toolbar **Theme** para ver o ícone correto em cada tema.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  }
}

export default meta
type Story = StoryObj<typeof ThemeButton>

export const Default: Story = {
  args: {}
}
