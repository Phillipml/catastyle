import { renderWithTheme, screen } from '@/test/utils'
import Logo from './Logo'

describe('Logo', () => {
  it('renderiza a imagem do logo com alt text', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByRole('img', { name: /logo/i })).toBeInTheDocument()
  })

  it('a imagem do logo possui atributo src', () => {
    renderWithTheme(<Logo />)
    const img = screen.getByRole('img', { name: /logo/i })
    expect(img).toHaveAttribute('src')
  })
})
