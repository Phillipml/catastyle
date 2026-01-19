import type { FontSizeType } from '@/types'
import { LinkStyled } from './styles'
import { Link as RouterLink } from 'react-router-dom'

export type LinkType = {
  href?: string
  to?: string
  children: React.ReactNode
  $target?: '_blank' | '_self'
  $isInternal?: boolean
} & FontSizeType

const Link = ({
  href,
  to,
  children,
  $target,
  $isInternal = false,
  $lgFontSize,
  $mdFontSize,
  $smFontSize
}: LinkType) => {
  if ($isInternal && to) {
    return (
      <RouterLink to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
        <LinkStyled
          $lgFontSize={$lgFontSize}
          $mdFontSize={$mdFontSize}
          $smFontSize={$smFontSize}
        >
          {children}
        </LinkStyled>
      </RouterLink>
    )
  }

  return (
    <LinkStyled
      href={href}
      target={$target}
      $lgFontSize={$lgFontSize}
      $mdFontSize={$mdFontSize}
      $smFontSize={$smFontSize}
    >
      {children}
    </LinkStyled>
  )
}

export default Link
