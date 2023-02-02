import { Link } from "react-router-dom";
import { AvatarIcon, LogoIcon } from "../../assets";
import { useWindowSize } from "../../hooks";
import { ROUTE } from "../../router";
import {
  StyledHeader,
  Title,
  AvatarText,
  AvatarWrapper,
  StyledBurgerMenuIcon,
} from "./styles";

export const Header = () => {
  const { width = 0 } = useWindowSize();

  return (
    <StyledHeader>
      {width < 768 ? (
        <StyledBurgerMenuIcon />
      ) : (
        <Link to={ROUTE.ROOT}>
          <LogoIcon />
        </Link>
      )}

      <Title>Библиотека</Title>
      {width > 768 && (
        <AvatarWrapper>
          <AvatarText>Привет, Иван!</AvatarText>
          <AvatarIcon />
        </AvatarWrapper>
      )}
    </StyledHeader>
  );
};
