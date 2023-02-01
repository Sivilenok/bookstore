import { FacebookIcon, InstagramIcon, LinkidinIcon, VkIcon } from "../../assets"
import { FooterText, FooterWrapper, StyledFooter } from "./styles"

export const Footer = () => (
  <StyledFooter>
    <FooterText>© 2020-2023 Cleverland. Все права защищены.</FooterText>
    <FooterWrapper>
      <FacebookIcon/>
      <InstagramIcon/>
      <VkIcon/>
      <LinkidinIcon/>
    </FooterWrapper>
  </StyledFooter>

)



