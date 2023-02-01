import styled from "styled-components";
import { COLOR } from "../../config";
import { typography } from "../../ui";

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0px;
  border-top: 1px solid ${COLOR.DARK_LIGHT};
`;

const FooterText = styled.div`
  ${typography.bodySmall};
  color: ${COLOR.GREY};
`;

const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export { StyledFooter, FooterText, FooterWrapper };
