# Catastyle

Design System reutilizável baseado em **React** e **styled-components**, com temas claro/escuro, componentes acessíveis e suporte a customização via arquivos de configuração no projeto consumidor.

## Instalação

```bash
npm install catastyle react react-dom styled-components react-router-dom
```

**Peer dependencies:** `react` (^18 ou ^19), `react-dom`, `styled-components`, `react-router-dom` (^6 ou ^7). O projeto consumidor deve instalá-las; o Catastyle não as inclui em `dependencies` para evitar duplicação.

### Projetos com Vite

Em projetos que usam **Vite**, configure `resolve.dedupe` para garantir uma única instância de React e styled-components (evita erros de contexto e duplicação de tema):

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

## Uso básico

Envolva sua aplicação com `ThemeProvider` e `GlobalStyle`:

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

function App() {
  const [theme, setTheme] = useState(DarkTheme)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainContainer>
        <Title>Olá, Catastyle</Title>
        <Text>Design system pronto para uso.</Text>
        <Button>Clique aqui</Button>
      </MainContainer>
    </ThemeProvider>
  )
}
```

## Componentes

| Componente     | Descrição                                                                 |
|----------------|----------------------------------------------------------------------------|
| `Button`       | Botão com variantes de estilo                                             |
| `Checkbox`     | Caixa de seleção                                                          |
| `Footer`       | Rodapé de página; aceita `children` para conteúdo customizável            |
| `Input`        | Campo de texto (inclui toggle de visibilidade para tipo password)         |
| `Label`        | Rótulo para formulários                                                   |
| `Link`         | Link externo ou interno (integra com react-router-dom via `$isInternal`)   |
| `Logo`         | Logo com suporte a tema claro/escuro                                      |
| `Main`         | Container principal com ThemeProvider, GlobalStyle e ThemeButton          |
| `Text`         | Parágrafo ou texto inline (`as="p"` ou `as="span"`)                      |
| `ThemeButton`  | Botão para alternar tema claro/escuro                                     |
| `Title`        | Título                                                                     |

### Exemplo: Footer customizável

O `Footer` recebe `children`; o conteúdo fica a cargo do projeto consumidor:

```tsx
import { Footer, Text } from 'catastyle'

<Footer>
  <Text as="p">© {new Date().getFullYear()} Minha Empresa - Todos os direitos reservados</Text>
</Footer>
```

## Temas

- **`DarkTheme`** e **`LightTheme`** — temas padrão do design system.
- Use `ThemeProvider` do `styled-components` (re-exportado) para aplicar o tema.
- Troca de tema: altere o objeto passado para `theme` no `ThemeProvider` (ex.: entre `DarkTheme` e `LightTheme`).

## Customização (projeto consumidor)

Após instalar o pacote, o script **postinstall** cria em seu projeto a pasta de configuração:

```
src/catastyle/config/
└── catastyle.config.ts
```

Temas, logos e ícones do ThemeButton são configurados no mesmo arquivo.

### Temas customizados

Edite `src/catastyle/config/catastyle.config.ts` e defina `darkTheme` e/ou `lightTheme`. Se forem `null`, os temas padrão do Catastyle são usados.

Exemplo de tema customizado:

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

**Para as cores atualizarem ao editar o config** (ex.: com HMR no dev), importe o config no seu App e passe os temas para o `Main`:

```tsx
import { Main } from 'catastyle'
import { darkTheme, lightTheme } from './catastyle/config/catastyle.config'

function App() {
  return (
    <Main darkTheme={darkTheme} lightTheme={lightTheme}>
      {/* ... */}
    </Main>
  )
}
```

Assim o config entra no bundle e alterações em `catastyle.config.ts` refletem ao salvar.

### Logos customizados

Os **logos padrão** do Catastyle vêm embutidos no pacote (data URL) e funcionam em qualquer bundler (Vite, Webpack, etc.) sem configuração extra.

Para usar seus próprios SVGs, edite `src/catastyle/config/catastyle.config.ts` e defina os caminhos em `logoLight`/`logoDark` e, se quiser, em `iconLight`/`iconDark` (ícone do ThemeButton). Use `'default'` para manter os padrão do Catastyle. Os caminhos devem ser os que o seu projeto consegue resolver (ex.: caminho público ou URL).

```ts
export const logoLight: string = '/src/assets/logo-light.svg'
export const logoDark: string = '/src/assets/logo-dark.svg'
export const iconLight: string = 'default'  // ou mesmo path do logo
export const iconDark: string = 'default'
```

## Exports adicionais

- **Estilos globais:** `GlobalStyle`, `MainContainer`
- **Tipos:** `WidthType`, `FontSizeType`, `FontSize`, `BreakpointType`
- **Utilitários:** `fontSizeToRem`, `mdScreen`, `smScreen`

## Testes

O projeto usa **Vitest** e **React Testing Library** para testes unitários dos componentes e utilitários.

```bash
# Rodar todos os testes (modo watch)
npm test

# Rodar testes unitários uma vez
npm run test:unit

# Rodar com cobertura
npm run test:coverage
```

## Desenvolvimento

```bash
# Instalar dependências
npm install

# Build da biblioteca
npm run build

# Modo watch (rebuild ao editar)
npm run dev

# Lint (verificar / corrigir)
npm run lint:check
npm run lint

# Testes
npm run test:unit

# Storybook (documentação e exemplos dos componentes)
npm run storybook
```

## CI/CD

O repositório usa **GitHub Actions** para garantir qualidade em todo push e pull request:

- **Lint** — `npm run lint:check`
- **Testes unitários** — `npm run test:unit`
- **Build** — `npm run build`

O workflow está em `.github/workflows/ci.yml` e roda em qualquer branch.

## Estrutura do pacote

- **`main`:** `./dist/index.js` (CommonJS)
- **`module`:** `./dist/index.mjs` (ESM)
- **`types`:** `./dist/index.d.ts`

## Sobre o projeto

Projeto **autoral**, desenvolvido com intuito de **estudo** e de criar uma biblioteca reutilizável que possa ser **integrada a outros projetos**. O Catastyle é mantido de forma independente e está disponível para uso e contribuição.

- Repositório: [github.com/Phillipml/catastyle](https://github.com/Phillipml/catastyle)

## Licença

ISC
