import type { Meta, StoryObj } from '@storybook/react'
import ThemeButton from './ThemeButton'

const meta: Meta<typeof ThemeButton> = {
  title: 'Components/ThemeButton',
  component: ThemeButton,
  parameters: {
    layout: 'centered'
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
