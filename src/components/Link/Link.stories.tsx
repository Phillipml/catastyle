import type { Meta, StoryObj } from '@storybook/react'
import Link from './Link'

const meta = {
  title: 'Components/Link',
  component: Link,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Link content'
    },
    href: {
      control: 'text',
      description: 'Destination URL'
    },
    $target: {
      control: 'select',
      options: ['_self', '_blank', '_parent', '_top'],
      description: 'Link target'
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
} satisfies Meta<typeof Link>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Internal link',
    href: '#',
    $lgFontSize: 16,
    $mdFontSize: 16,
    $smFontSize: 16
  }
}

export const External: Story = {
  args: {
    children: 'External link',
    href: 'https://example.com',
    $target: '_blank',
    $lgFontSize: 16,
    $mdFontSize: 16,
    $smFontSize: 16
  }
}
