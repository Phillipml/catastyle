# Catastyle

Design System reutilizável baseado em **React** e **styled-components**, com temas claro/escuro, componentes acessíveis e customização via arquivo de configuração no projeto consumidor.

## Instalação

```bash
npm install catastyle react react-dom styled-components react-router-dom
```

**Peer dependencies:** `react` (^18 ou ^19), `react-dom`, `styled-components`, `react-router-dom` (^6 ou ^7). O projeto consumidor deve instalá-las; o Catastyle não as inclui em `dependencies` para evitar duplicação.

### Projetos com Vite

Em projetos que usam **Vite**, configure `resolve.dedupe` para garantir uma única instância de React e styled-components:

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: ['react', 'react-dom', 'styled-components'],
  },
})
```

## Uso recomendado: componente Main

A forma mais simples é usar o **Main**: ele já inclui `ThemeProvider`, `GlobalStyle`, `MainContainer` e o **ThemeButton** (botão para alternar tema). Você só precisa passar os `children`.

```tsx
import { Main, Logo, Title, Text, Button } from 'catastyle'

function App() {
  return (
    <Main>
      <Logo />
      <Title color="primary">Olá, Catastyle</Title>
      <Text as="p">Design system pronto para uso.</Text>
      <Button>Clique aqui</Button>
    </Main>
  )
}
```

### Props do Main

| Prop           | Tipo                    | Padrão   | Descrição                                                                 |
|----------------|-------------------------|----------|----------------------------------------------------------------------------|
| `children`     | `React.ReactNode`       | —        | Conteúdo da página                                                        |
| `centered`     | `boolean`              | `true`   | Se `true`: layout centralizado, largura até 1440px, altura 100vh          |
| `position`     | `ThemeButtonPosition`   | —        | Posição do ThemeButton (`'top-right'`, `'top-left'`, `'bottom-right'`, `'bottom-left'`) |
| `darkTheme`    | `DefaultTheme \| null`   | —        | Tema escuro customizado (null = tema padrão do Catastyle)                  |
| `lightTheme`   | `DefaultTheme \| null`   | —        | Tema claro customizado (null = tema padrão)                               |
| `iconLight`    | `string`                | —        | URL/import do ícone do ThemeButton no tema claro                           |
| `iconDark`     | `string`                | —        | URL/import do ícone do ThemeButton no tema escuro                          |
| `className`    | `string`                | —        | Classe CSS aplicada ao container                                          |

- **`centered={true}`** (padrão): o container usa `width: 100vw`, `max-width: 1440px`, `height: 100vh`, fica centralizado na tela (`margin: 0 auto`) e o conteúdo é centralizado com flexbox.
- **`centered={false}`**: o container usa `width: 100%`, sem limite de largura nem altura fixa; conteúdo alinhado ao topo.

## Uso avançado (sem Main)

Se preferir controlar tema e layout manualmente:

```tsx
import {
  ThemeProvider,
  DarkTheme,
  LightTheme,
  GlobalStyle,
  MainContainer,
  Button,
  Title,
  Text,
} from 'catastyle'
import { useState } from 'react'

function App() {
  const [dark, setDark] = useState(true)
  const theme = dark ? DarkTheme : LightTheme

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainContainer>
        <Title color="primary">Olá, Catastyle</Title>
        <Text as="p">Design system pronto para uso.</Text>
        <Button onClick={() => setDark(!dark)}>Trocar tema</Button>
      </MainContainer>
    </ThemeProvider>
  )
}
```

## Componentes

| Componente     | Descrição                                                                 |
|----------------|---------------------------------------------------------------------------|
| `Button`       | Botão com variantes de estilo                                             |
| `Checkbox`     | Caixa de seleção; `children` é o rótulo (string)                          |
| `Footer`       | Rodapé; aceita `children` para conteúdo customizável                      |
| `Input`        | Campo de texto (inclui toggle de visibilidade para tipo password)         |
| `Label`        | Rótulo para formulários                                                    |
| `Link`         | Link externo ou interno (react-router-dom via `$isInternal`)               |
| `Logo`         | Logo que alterna com o tema; aceita `logoLight` e `logoDark` (SVG/URL); se não passar, usa o padrão do Catastyle |
| `Main`         | Container principal com ThemeProvider, GlobalStyle e ThemeButton; aceita `centered`, temas e ícones |
| `Text`         | Parágrafo ou texto inline (`as="p"` ou `as="span"`)                       |
| `ThemeButton`  | Botão para alternar tema; aceita `iconLight` e `iconDark`; se não passar, usa o padrão |
| `Title`        | Título; aceita `children` como `React.ReactNode` (texto ou JSX, ex. com `<br />`) |

## Temas

- **`DarkTheme`** e **`LightTheme`** — temas padrão exportados pelo pacote.
- O **Main** injeta no tema a propriedade **`isDark`** (`boolean`) para que componentes como Logo e ThemeButton saibam qual tema está ativo.
- Para temas customizados, use o arquivo de config no projeto consumidor (ver abaixo).

## Customização (projeto consumidor)

Após `npm install`, o script **postinstall** cria a pasta e o arquivo de configuração (apenas temas; logos e ícones não vêm do config):

```
src/catastyle/
└── catastyle.config.ts
```

Nesse arquivo você configura **apenas temas**. Logo e ícone do ThemeButton são definidos pelas **props** nos componentes (ou no Main); se não forem passados, usam os padrões do Catastyle.

### Temas customizados

Edite `src/catastyle/catastyle.config.ts` e defina `darkTheme` e/ou `lightTheme`. Se forem `null`, os temas padrão do Catastyle são usados.

Exemplo:

```ts
import type { DefaultTheme } from 'styled-components'

export const darkTheme: DefaultTheme | null = {
  primaryColor: '#EBFFEB',
  secondaryColor: '#538A53',
  tertiaryColor: '#669966',
  bgColor: '#011F1F',
  linkColor: '#33CC66',
}

export const lightTheme: DefaultTheme | null = {
  primaryColor: '#011F1F',
  secondaryColor: '#33CC66',
  tertiaryColor: '#538A53',
  bgColor: '#EBFFEB',
  linkColor: '#006633',
}
```

Para as cores atualizarem ao editar o config (ex.: com HMR), importe o config no App e passe os temas para o **Main**:

```tsx
import { Main } from 'catastyle'
import { darkTheme, lightTheme } from './catastyle/catastyle.config'

function App() {
  return (
    <Main darkTheme={darkTheme} lightTheme={lightTheme}>
      {/* ... */}
    </Main>
  )
}
```

### Logos e ícones customizados

- **Logo:** importe os SVGs e passe `logoLight` e `logoDark` no componente **Logo**.
- **ThemeButton:** importe os SVGs e passe `iconLight` e `iconDark` no **ThemeButton** ou no **Main** (o Main repassa para o ThemeButton).

Exemplo:

```tsx
import { Logo, Main } from 'catastyle'
import logoClaro from '@/assets/meu-logo-claro.svg'
import logoEscuro from '@/assets/meu-logo-escuro.svg'

<Logo logoLight={logoClaro} logoDark={logoEscuro} />
```

```tsx
import { Main } from 'catastyle'
import iconClaro from '@/assets/meu-icone-claro.svg'
import iconEscuro from '@/assets/meu-icone-escuro.svg'

<Main iconLight={iconClaro} iconDark={iconEscuro}>
  {/* ... */}
</Main>
```

O arquivo `catastyle.config.ts` **não** define logo nem ícone; apenas temas.

## Exports

- **Componentes:** `Button`, `Checkbox`, `Footer`, `Input`, `Label`, `Link`, `Logo`, `Main`, `Text`, `ThemeButton`, `Title`
- **Temas:** `DarkTheme`, `LightTheme`
- **Estilos:** `GlobalStyle`, `MainContainer`, `ThemeProvider` (styled-components)
- **Tipos:** `WidthType`, `FontSizeType`, `FontSize`, `BreakpointType`
- **Utilitários:** `fontSizeToRem`, `mdScreen`, `smScreen` (media queries)

## Testes

```bash
npm test          # watch
npm run test:unit # uma vez
npm run test:coverage
```

## Desenvolvimento

```bash
npm install
npm run build
npm run dev       # watch
npm run lint:check
npm run lint
npm run storybook
```

## CI/CD

GitHub Actions em todo push/PR: lint, testes unitários e build. Workflow em `.github/workflows/ci.yml`.

## Estrutura do pacote

- **main:** `./dist/index.js` (CommonJS)
- **module:** `./dist/index.mjs` (ESM)
- **types:** `./dist/index.d.ts`

## Sobre o projeto

Projeto **autoral**, para **estudo** e uso como biblioteca reutilizável em outros projetos.

- Repositório: [github.com/Phillipml/catastyle](https://github.com/Phillipml/catastyle)

## Licença

ISC
