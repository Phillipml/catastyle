import { renderWithTheme, screen } from '@/test/utils'
import Label from './Label'

describe('Label', () => {
  it('renderiza o conteúdo e associa ao input via htmlFor', () => {
    renderWithTheme(<Label htmlFor="campo-email">Email</Label>)
    const label = screen.getByText('Email')
    expect(label).toBeInTheDocument()
    expect(label).toHaveAttribute('for', 'campo-email')
  })
})
