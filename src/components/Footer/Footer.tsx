import { FooterStyled } from './styles'
import Text from '@/components/Text/Text'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <FooterStyled>
      <Text as="p" $lgFontSize={12}>
        {`© ${currentYear.toString()} flow-e-focus Ltda - Todos os direitos reservados`}
      </Text>
    </FooterStyled>
  )
}

export default Footer
