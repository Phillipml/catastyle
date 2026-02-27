import { renderWithTheme, screen } from '@/test/utils'
import Title from './Title'

describe('Title', () => {
  it('renderiza o conteúdo passado como children', () => {
    renderWithTheme(<Title color="primary">Título da página</Title>)
    expect(screen.getByText('Título da página')).toBeInTheDocument()
  })

  it('aceita color primary', () => {
    renderWithTheme(<Title color="primary">Primary</Title>)
    expect(screen.getByText('Primary')).toBeInTheDocument()
  })

  it('aceita color secondary', () => {
    renderWithTheme(<Title color="secondary">Secondary</Title>)
    expect(screen.getByText('Secondary')).toBeInTheDocument()
  })

  it('aplica className no elemento', () => {
    renderWithTheme(
      <Title color="primary" className="titulo-custom">
        Título
      </Title>
    )
    expect(screen.getByText('Título')).toHaveClass('titulo-custom')
  })
})
