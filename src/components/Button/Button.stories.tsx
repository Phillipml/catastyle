import type { Meta, StoryObj } from '@storybook/react-vite'
import Button from './Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Button content'
    },
    disabled: {
      control: 'boolean',
      description: 'Button disabled state'
    },
    $lgWidth: {
      control: 'number',
      description: 'Width on large screens'
    },
    $mdWidth: {
      control: 'number',
      description: 'Width on medium screens'
    },
    $smWidth: {
      control: 'number',
      description: 'Width on small screens'
    },
    $lgFontSize: {
      control: 'select',
      options: [4, 8, 12, 16, 20, 24, 32, 40],
      description: 'Font size on large screens'
    },
    $mdFontSize: {
      control: 'select',
      options: [4, 8, 12, 16, 20, 24, 32, 40],
      description: 'Font size on medium screens'
    },
    $smFontSize: {
      control: 'select',
      options: [4, 8, 12, 16, 20, 24, 32, 40],
      description: 'Font size on small screens'
    },
    onClick: { action: 'clicked' }
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Button',
    $lgFontSize: 16,
    $mdFontSize: 16,
    $smFontSize: 16,
    onClick: () => {},
    type: 'button'
  }
}

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
    $lgFontSize: 16,
    $mdFontSize: 16,
    $smFontSize: 16,
    onClick: () => {}
  }
}
