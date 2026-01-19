import type { Meta, StoryObj } from '@storybook/react'
import Title from './Title'

const meta = {
  title: 'Components/Title',
  component: Title,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Title content'
    },
    color: {
      control: 'text',
      description: 'Title color'
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
} satisfies Meta<typeof Title>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Title',
    color: 'primary',
    $lgFontSize: 40,
    $mdFontSize: 32,
    $smFontSize: 24
  }
}
