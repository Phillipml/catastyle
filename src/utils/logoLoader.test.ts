const MOCK_LOGO_LIGHT = '../src/mocks/logos/light-theme.svg'
const MOCK_LOGO_DARK = '../src/mocks/logos/dark-theme.svg'
const MOCK_ICON_LIGHT = '../src/mocks/icon/icon-light-theme.svg'
const MOCK_ICON_DARK = '../src/mocks/icon/icon-dark-theme.svg'

vi.mock('@/assets/logos/light-theme.svg', () => ({
  default: MOCK_LOGO_LIGHT
}))
vi.mock('@/assets/logos/dark-theme.svg', () => ({
  default: MOCK_LOGO_DARK
}))
vi.mock('@/assets/icon/icon-light-theme.svg', () => ({
  default: MOCK_ICON_LIGHT
}))
vi.mock('@/assets/icon/icon-dark-theme.svg', () => ({
  default: MOCK_ICON_DARK
}))

describe('logoLoader', () => {
  beforeEach(() => {
    vi.resetModules()
  })

  describe('getLogoLight', () => {
    it('retorna o logo light padrão do pacote', async () => {
      const { getLogoLight } = await import('./logoLoader')
      expect(getLogoLight()).toBe(MOCK_LOGO_LIGHT)
    })
  })

  describe('getLogoDark', () => {
    it('retorna o logo dark padrão do pacote', async () => {
      const { getLogoDark } = await import('./logoLoader')
      expect(getLogoDark()).toBe(MOCK_LOGO_DARK)
    })
  })

  describe('getIconLight', () => {
    it('retorna o ícone light padrão do pacote', async () => {
      const { getIconLight } = await import('./logoLoader')
      expect(getIconLight()).toBe(MOCK_ICON_LIGHT)
    })
  })

  describe('getIconDark', () => {
    it('retorna o ícone dark padrão do pacote', async () => {
      const { getIconDark } = await import('./logoLoader')
      expect(getIconDark()).toBe(MOCK_ICON_DARK)
    })
  })
})
