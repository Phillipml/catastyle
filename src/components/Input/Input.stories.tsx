import type { Meta, StoryObj } from '@storybook/react'
import Input from './Input'

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number'],
      description: 'Input type'
    },
    placeholder: {
      control: 'text',
      description: 'Input placeholder text'
    },
    $disabled: {
      control: 'boolean',
      description: 'Input disabled state'
    },
    $required: {
      control: 'boolean',
      description: 'Required field'
    },
    display: {
      control: 'text',
      description: 'Input display'
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
    onChange: { action: 'changed' }
  }
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: 'input-default',
    name: 'input-default',
    placeholder: 'Type something...',
    type: 'text',
    $lgFontSize: 16,
    $mdFontSize: 16,
    $smFontSize: 16
  }
}

export const Password: Story = {
  args: {
    id: 'input-password',
    name: 'input-password',
    placeholder: 'Enter your password...',
    type: 'password',
    $lgFontSize: 16,
    $mdFontSize: 16,
    $smFontSize: 16
  }
}

export const Disabled: Story = {
  args: {
    id: 'input-disabled',
    name: 'input-disabled',
    type: 'text',
    placeholder: 'Disabled input',
    $disabled: true,
    $lgFontSize: 16,
    $mdFontSize: 16,
    $smFontSize: 16
  }
}

export const Required: Story = {
  args: {
    id: 'input-required',
    name: 'input-required',
    type: 'text',
    placeholder: 'Required field',
    $required: true,
    $lgFontSize: 16,
    $mdFontSize: 16,
    $smFontSize: 16
  }
}
