# Catastyle

Design System reutilizável baseado em **React** e **styled-components**, com temas claro/escuro, componentes acessíveis e suporte a customização via arquivos de configuração no projeto consumidor.

## Instalação

```bash
npm install catastyle react react-dom styled-components react-router-dom
```

**Peer dependencies:** `react` (^18 ou ^19), `react-dom`, `styled-components`, `react-router-dom` (^6 ou ^7).

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

| Componente     | Descrição                          |
|----------------|------------------------------------|
| `Button`       | Botão com variantes de estilo      |
| `Checkbox`     | Caixa de seleção                   |
| `Footer`       | Rodapé de página                   |
| `Input`       | Campo de texto                     |
| `Label`        | Rótulo para formulários            |
| `Link`         | Link (integra com react-router-dom)|
| `Logo`         | Logo com suporte a tema claro/escuro |
| `Main`         | Container principal de conteúdo     |
| `Text`         | Parágrafo/texto                    |
| `ThemeButton`  | Botão para alternar tema           |
| `Title`        | Título                             |

## Temas

- **`DarkTheme`** e **`LightTheme`** — temas padrão do design system.
- Use `ThemeProvider` do `styled-components` (re-exportado) para aplicar o tema.
- Troca de tema: altere o objeto passado para `theme` no `ThemeProvider` (ex.: entre `DarkTheme` e `LightTheme`).

## Customização (projeto consumidor)

Após instalar o pacote, o script **postinstall** cria em seu projeto a pasta de configuração:

```
src/catastyle/config/
├── theme.config.ts
└── logo.config.ts
```

### Temas customizados

Edite `src/catastyle/config/theme.config.ts` e defina `darkTheme` e/ou `lightTheme`. Se forem `null`, os temas padrão do Catastyle são usados.

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

### Logos customizados

Edite `src/catastyle/config/logo.config.ts` e defina os caminhos dos SVGs. Use `'default'` para manter os logos do Catastyle.

```ts
export const logoLight: string = '/src/assets/logo-light.svg'
export const logoDark: string = '/src/assets/logo-dark.svg'
```

## Exports adicionais

- **Estilos globais:** `GlobalStyle`, `MainContainer`
- **Tipos:** `WidthType`, `FontSizeType`, `FontSize`, `BreakpointType`
- **Utilitários:** `fontSizeToRem`, `mdScreen`, `smScreen`

## Desenvolvimento

```bash
# Build da biblioteca
npm run build

# Modo watch
npm run dev

# Storybook
npm run storybook
```

## Estrutura do pacote

- **`main`:** `./dist/index.cjs` (CommonJS)
- **`module`:** `./dist/index.esm.js` (ESM)
- **`types`:** `./dist/index.d.ts`

## Licença

ISC
