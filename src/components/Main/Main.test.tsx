import { render, screen, fireEvent } from '@/test/utils'
import Main from './Main'

describe('Main', () => {
  it('renderiza os children dentro do layout', () => {
    render(<Main>Conteúdo da página</Main>)
    expect(screen.getByText('Conteúdo da página')).toBeInTheDocument()
  })

  it('renderiza o ThemeButton para alternar tema', () => {
    render(<Main>Conteúdo</Main>)
    expect(
      screen.getByRole('img', { name: /theme button/i })
    ).toBeInTheDocument()
  })

  it('alterna o tema ao clicar no ThemeButton', () => {
    render(<Main>Conteúdo</Main>)
    const themeButton = screen.getByRole('button')
    fireEvent.click(themeButton)
    expect(themeButton).toBeInTheDocument()
    fireEvent.click(themeButton)
    expect(themeButton).toBeInTheDocument()
  })
})
