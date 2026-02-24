import type { Meta, StoryObj } from '@storybook/react-vite'
import Text from './Text'

const meta = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'select',
      options: ['p', 'span', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'HTML element to be rendered'
    },
    children: {
      control: 'text',
      description: 'Text content'
    },
    color: {
      control: 'text',
      description: 'Text color'
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
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    as: 'p',
    children: 'Default text',
    color: 'primary',
    $lgFontSize: 16,
    $mdFontSize: 16,
    $smFontSize: 16
  }
}
