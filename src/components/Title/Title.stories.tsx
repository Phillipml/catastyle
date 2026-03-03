import type { Meta, StoryObj } from '@storybook/react-vite'
import Title from './Title'

const meta = {
  title: 'Components/Title',
  component: Title,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Título. Aceita `children` como texto ou ReactNode (ex.: com <br /> para quebra de linha).'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Conteúdo do título (texto ou ReactNode)'
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'Cor do título'
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

export const WithLineBreak: Story = {
  args: {
    color: 'primary',
    $lgFontSize: 24,
    $mdFontSize: 20,
    $smFontSize: 16
  },
  render: (args) => (
    <Title {...args}>
      Primeira linha
      <br />
      Segunda linha
    </Title>
  )
}
