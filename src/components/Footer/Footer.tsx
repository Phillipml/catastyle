import { FooterStyled } from './styles'
type FooterType = {
  children: React.ReactNode
  className?: string
}
const Footer = ({ children, className }: FooterType) => {
  return <FooterStyled className={className}>{children}</FooterStyled>
}

export default Footer
