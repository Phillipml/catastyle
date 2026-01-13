import type { Meta, StoryObj } from '@storybook/react-vite'
import Logo from './Logo'

const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
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
