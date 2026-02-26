import { renderWithTheme, screen } from '@/test/utils'
import Text from './Text'

describe('Text', () => {
  it('renderiza o conteúdo passado como children', () => {
    renderWithTheme(<Text as="p">Parágrafo de exemplo</Text>)
    expect(screen.getByText('Parágrafo de exemplo')).toBeInTheDocument()
  })

  it('renderiza como elemento p por padrão quando as="p"', () => {
    renderWithTheme(<Text as="p">Texto</Text>)
    const el = screen.getByText('Texto')
    expect(el.tagName).toBe('P')
  })

  it('renderiza como span quando as="span"', () => {
    renderWithTheme(<Text as="span">Texto inline</Text>)
    const el = screen.getByText('Texto inline')
    expect(el.tagName).toBe('SPAN')
  })
})
