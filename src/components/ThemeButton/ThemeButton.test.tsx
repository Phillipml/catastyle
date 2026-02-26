import { renderWithTheme, screen, fireEvent } from '@/test/utils'
import ThemeButton from './ThemeButton'

describe('ThemeButton', () => {
  it('renderiza o botão de tema com imagem', () => {
    renderWithTheme(<ThemeButton />)
    expect(
      screen.getByRole('img', { name: /theme button/i })
    ).toBeInTheDocument()
  })

  it('chama onClick quando clicado', () => {
    const handleClick = vi.fn()
    renderWithTheme(<ThemeButton onClick={handleClick} />)
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
