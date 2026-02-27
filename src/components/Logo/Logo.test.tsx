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

  it('aplica className no elemento', () => {
    renderWithTheme(<Logo className="logo-custom" />)
    const wrapper = screen.getByRole('img', { name: /logo/i }).parentElement
    expect(wrapper).toHaveClass('logo-custom')
  })
})
