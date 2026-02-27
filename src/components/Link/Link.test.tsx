import { MemoryRouter } from 'react-router-dom'
import { renderWithTheme, screen } from '@/test/utils'
import Link from './Link'

describe('Link', () => {
  it('renderiza link externo com href e children', () => {
    renderWithTheme(<Link href="https://exemplo.com">Ir para site</Link>)
    const link = screen.getByRole('link', { name: /ir para site/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://exemplo.com')
  })

  it('aceita target _blank', () => {
    renderWithTheme(
      <Link href="https://exemplo.com" $target="_blank">
        Abrir em nova aba
      </Link>
    )
    expect(screen.getByRole('link')).toHaveAttribute('target', '_blank')
  })

  it('renderiza link interno com RouterLink quando $isInternal e to', () => {
    renderWithTheme(
      <MemoryRouter>
        <Link to="/sobre" $isInternal>
          Sobre
        </Link>
      </MemoryRouter>
    )
    const link = screen.getByRole('link', { name: /sobre/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/sobre')
  })

  it('aplica className no elemento (link externo)', () => {
    renderWithTheme(
      <Link href="https://exemplo.com" className="link-custom">
        Link
      </Link>
    )
    expect(screen.getByRole('link', { name: /link/i })).toHaveClass(
      'link-custom'
    )
  })
})
