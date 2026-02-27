import { renderWithTheme, screen } from '@/test/utils'
import Footer from './Footer'
import Text from '../Text/Text'

describe('Footer', () => {
  it('renderiza o conteúdo passado como children', () => {
    renderWithTheme(
      <Footer>
        <Text as="p">Conteúdo do Footer</Text>
      </Footer>
    )
    expect(screen.getByText('Conteúdo do Footer')).toBeInTheDocument()
  })

  it('aplica className no elemento', () => {
    renderWithTheme(
      <Footer className="footer-custom">
        <Text as="p">Rodapé</Text>
      </Footer>
    )
    const footer = screen.getByText('Rodapé').closest('footer')
    expect(footer).toHaveClass('footer-custom')
  })
})
