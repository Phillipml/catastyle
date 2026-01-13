import type { Meta, StoryObj } from '@storybook/react'
import Label from './Label'

const meta = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Label content'
    },
    htmlFor: {
      control: 'text',
      description: 'Associated input ID'
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
    }
  }
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Default label',
    $lgFontSize: 16,
    $mdFontSize: 16,
    $smFontSize: 16,
    htmlFor: 'input-1'
  }
}
export const Required: Story = {
  args: {
    children: 'Required label *',
    $lgFontSize: 16,
    $mdFontSize: 16,
    $smFontSize: 16,
    htmlFor: 'input-required'
  }
}
