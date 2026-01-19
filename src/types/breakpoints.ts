export const BREAKPOINTS = {
  md: '1024px',
  sm: '768px'
} as const

export const mdScreen = `@media (max-width: ${BREAKPOINTS.md})`
export const smScreen = `@media (max-width: ${BREAKPOINTS.sm})`

export type BreakpointType = {
  mdScreen?: boolean
  smScreen?: boolean
}

export const applyBreakpointStyles = (
  baseStyles: string,
  mdStyles?: string,
  smStyles?: string
) => `
  ${baseStyles}

  ${mdStyles ? `${mdScreen} { ${mdStyles} }` : ''}
  ${smStyles ? `${smScreen} { ${smStyles} }` : ''}
`
