import styled from "styled-components";
import { Media, typography } from "../../ui";

const LogoIcon = styled.img`
  width: 165px;
  height: 40px;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  ${Media.MD} {
  }
  ${Media.SM} {
  }
`;

const Title = styled.div`
  ${typography.h3}
`;

const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-self: end;
`;

const AvatarIcon = styled.img`
  width: 58px;
  height: 58px;
`;
const AvatarText = styled.div`
  padding: 0 16px;
`;

export { LogoIcon, StyledHeader, Title, AvatarText, AvatarIcon, AvatarWrapper };
