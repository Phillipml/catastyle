import { renderWithTheme, screen, fireEvent } from '@/test/utils'
import Input from './Input'

describe('Input', () => {
  it('renderiza com id, name e placeholder', () => {
    renderWithTheme(
      <Input
        type="text"
        id="email"
        name="email"
        placeholder="Digite seu email"
      />
    )
    const input = screen.getByPlaceholderText('Digite seu email')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('id', 'email')
    expect(input).toHaveAttribute('name', 'email')
    expect(input).toHaveAttribute('placeholder', 'Digite seu email')
  })

  it('chama onChange quando o valor muda', () => {
    const handleChange = vi.fn()
    renderWithTheme(
      <Input type="text" id="campo" name="campo" onChange={handleChange} />
    )
    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'novo texto' } })
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  it('renderiza desabilitado quando $disabled é true', () => {
    renderWithTheme(<Input type="text" id="campo" name="campo" $disabled />)
    expect(screen.getByRole('textbox')).toBeDisabled()
  })

  it('renderiza tipo password e alterna visibilidade ao clicar no botão', () => {
    renderWithTheme(
      <Input type="password" id="senha" name="senha" placeholder="Senha" />
    )
    const input = screen.getByPlaceholderText('Senha')
    expect(input).toHaveAttribute('type', 'password')
    const toggleButton = screen.getByRole('button')
    fireEvent.click(toggleButton)
    expect(input).toHaveAttribute('type', 'text')
    fireEvent.click(toggleButton)
    expect(input).toHaveAttribute('type', 'password')
  })

  it('aplica className no wrapper', () => {
    renderWithTheme(
      <Input
        type="text"
        id="campo"
        name="campo"
        className="input-wrapper-custom"
      />
    )
    const wrapper = screen.getByRole('textbox').closest('div')
    expect(wrapper).toHaveClass('input-wrapper-custom')
  })
})
