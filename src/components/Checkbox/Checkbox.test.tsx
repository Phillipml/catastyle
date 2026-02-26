import { renderWithTheme, screen, fireEvent } from '@/test/utils'
import Checkbox from './Checkbox'

describe('Checkbox', () => {
  it('renderiza com label e associa ao input', () => {
    renderWithTheme(
      <Checkbox id="aceito" name="aceito" children="Aceito os termos" />
    )
    expect(
      screen.getByRole('checkbox', { name: /aceito os termos/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('checkbox')).toHaveAttribute('id', 'aceito')
    expect(screen.getByRole('checkbox')).toHaveAttribute('name', 'aceito')
  })

  it('chama onChange quando o estado muda', () => {
    const handleChange = vi.fn()
    renderWithTheme(
      <Checkbox id="opt" name="opt" onChange={handleChange} children="Opção" />
    )
    fireEvent.click(screen.getByRole('checkbox'))
    expect(handleChange).toHaveBeenCalled()
  })

  it('renderiza desabilitado quando $disabled é true', () => {
    renderWithTheme(<Checkbox id="opt" name="opt" $disabled children="Opção" />)
    expect(screen.getByRole('checkbox')).toBeDisabled()
  })

  it('pode ser controlado com checked', () => {
    renderWithTheme(<Checkbox id="opt" name="opt" checked children="Marcado" />)
    expect(screen.getByRole('checkbox')).toBeChecked()
  })
})
