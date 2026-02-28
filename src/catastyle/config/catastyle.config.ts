import type { DefaultTheme } from 'styled-components'
// TEMAS
// Para customizar os temas, descomente e configure os objetos abaixo.
// Se os valores estiverem como null, os temas padrão do Catastyle serão usados.
// Descomente e configure as cores abaixo:
export const darkTheme: DefaultTheme | null = null
/*
export const darkTheme: DefaultTheme | null = {
  primaryColor: '#EBFFEB',
  secondaryColor: '#538A53',
  tertiaryColor: '#669966',
  bgColor: '#011F1F',
  linkColor: '#33CC66'
}
*/
export const lightTheme: DefaultTheme | null = null
/*
export const lightTheme: DefaultTheme | null = {
  primaryColor: '#011F1F',
  secondaryColor: '#33CC66',
  tertiaryColor: '#538A53',
  bgColor: '#EBFFEB',
  linkColor: '#006633'
}
*/

// LOGOS
// Caminho para SVG customizado ou 'default' para usar os do Catastyle.
// Exemplo: '/src/assets/logo-light.svg'
export const logoLight: string = 'default'
export const logoDark: string = 'default'

// ÍCONES
export const iconLight: string = 'default'
export const iconDark: string = 'default'
