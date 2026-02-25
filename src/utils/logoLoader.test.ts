import { vi } from 'vitest'
const MOCK_LOGO_LIGHT = '../src/mocks/logos/light-theme.svg'
const MOCK_LOGO_DARK = '../src/mocks/logos/dark-theme.svg'

vi.mock('@/assets/logos/light-theme.svg', () => ({
  default: MOCK_LOGO_LIGHT
}))
vi.mock('@/assets/logos/dark-theme.svg', () => ({
  default: MOCK_LOGO_DARK
}))

describe('logoLoader', () => {
  beforeEach(() => {
    vi.resetModules()
  })

  describe('getLogoLight', () => {
    it('retorna o logo light default quando não há config do usuário', async () => {
      const { getLogoLight } = await import('./logoLoader')
      expect(getLogoLight()).toBe(MOCK_LOGO_LIGHT)
    })
  })

  describe('getLogoDark', () => {
    it('retorna o logo dark default quando não há config do usuário', async () => {
      const { getLogoDark } = await import('./logoLoader')
      expect(getLogoDark()).toBe(MOCK_LOGO_DARK)
    })
  })
})
