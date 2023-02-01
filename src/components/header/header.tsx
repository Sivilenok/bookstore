import { AvatarIcon, LogoIcon } from "../../assets";
import { StyledHeader, Title, AvatarText, AvatarWrapper  } from "./styles";


export const Header = () => {
    return ( 
        <StyledHeader>
          <LogoIcon />
          <Title>Библиотека</Title>
         <AvatarWrapper>
          <AvatarText>Привет, Иван!</AvatarText>
          <AvatarIcon />
         </AvatarWrapper>
          
        </StyledHeader>
       
    ) 
}
     
