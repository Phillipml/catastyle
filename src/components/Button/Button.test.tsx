import { renderWithTheme, screen, fireEvent } from '@/test/utils'
import Button from './Button'

describe('Button', () => {
  it('renderiza o conteúdo passado como children', () => {
    renderWithTheme(<Button>Clique aqui</Button>)
    expect(
      screen.getByRole('button', { name: /clique aqui/i })
    ).toBeInTheDocument()
  })

  it('chama onClick quando clicado', () => {
    const handleClick = vi.fn()
    renderWithTheme(<Button onClick={handleClick}>Enviar</Button>)
    fireEvent.click(screen.getByRole('button', { name: /enviar/i }))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('não chama onClick quando disabled', () => {
    const handleClick = vi.fn()
    renderWithTheme(
      <Button onClick={handleClick} disabled>
        Desabilitado
      </Button>
    )
    fireEvent.click(screen.getByRole('button', { name: /desabilitado/i }))
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('renderiza com type submit quando informado', () => {
    renderWithTheme(<Button type="submit">Enviar formulário</Button>)
    expect(
      screen.getByRole('button', { name: /enviar formulário/i })
    ).toHaveAttribute('type', 'submit')
  })

  it('aceita id para acessibilidade', () => {
    renderWithTheme(<Button id="meu-botao">Botão</Button>)
    expect(screen.getByRole('button')).toHaveAttribute('id', 'meu-botao')
  })
})
