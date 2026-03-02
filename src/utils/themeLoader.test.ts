vi.mock('path', () => ({
  default: {
    join: () => '/nonexistent/catastyle.config.ts'
  }
}))
describe('themeloader', () => {
  beforeEach(() => {
    vi.resetModules()
  })
  describe('getDarkTheme', () => {
    it('retorna o tema dark default quando nõ temos config do usuario', async () => {
      const { getDarkTheme } = await import('./themeLoader')
      const theme = getDarkTheme()
      expect(theme).toBeDefined()
      expect(theme).toHaveProperty('primaryColor', '#EBFFEB')
      expect(theme).toHaveProperty('bgColor', '#011F1F')
      expect(theme).toHaveProperty('linkColor', '#33CC66')
    })
  })
  describe('getLightTheme', () => {
    it('retorna o tema light default quando não há config do usuário', async () => {
      const { getLightTheme } = await import('./themeLoader')
      const theme = getLightTheme()
      expect(theme).toBeDefined()
      expect(theme).toHaveProperty('primaryColor', '#011F1F')
      expect(theme).toHaveProperty('bgColor', '#EBFFEB')
      expect(theme).toHaveProperty('linkColor', '#006633')
    })
  })
})
