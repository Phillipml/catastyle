import type { FontSizeType } from '@/types'
import { LinkStyled } from './styles'
import { Link as RouterLink } from 'react-router-dom'

export type LinkType = {
  href?: string
  to?: string
  children: React.ReactNode
  className?: string
  $target?: '_blank' | '_self'
  $isInternal?: boolean
} & FontSizeType

const Link = ({
  href,
  to,
  children,
  className,
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
          className={className}
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
      className={className}
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
