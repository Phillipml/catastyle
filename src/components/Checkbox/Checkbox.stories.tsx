import type { Meta, StoryObj } from '@storybook/react'
import Checkbox from './Checkbox'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Checkbox state'
    },
    $disabled: {
      control: 'boolean',
      description: 'Checkbox disabled state'
    },
    display: {
      control: 'text',
      description: 'Checkbox display'
    },
    $lgWidth: {
      control: 'number',
      description: 'Width on large screens'
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
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: 'checkbox-default',
    name: 'checkbox-default',
    children: 'Default checkbox',
    $lgFontSize: 16,
    $mdFontSize: 16,
    $smFontSize: 16
  }
}

export const Checked: Story = {
  args: {
    id: 'checkbox-checked',
    name: 'checkbox-checked',
    children: 'Checked checkbox',
    checked: true,
    $lgFontSize: 16,
    $mdFontSize: 16,
    $smFontSize: 16
  }
}

export const Disabled: Story = {
  args: {
    id: 'checkbox-disabled',
    name: 'checkbox-disabled',
    children: 'Disabled checkbox',
    $disabled: true,
    $lgFontSize: 16,
    $mdFontSize: 16,
    $smFontSize: 16
  }
}
