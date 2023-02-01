import styled from "styled-components";
import { COLOR } from "../../config";
import { typography } from "../../ui";

interface Props {
  padding: string | undefined;
  width: string | undefined;
  margin: string | undefined;
  borderRadius: string | undefined;
}

const StyledButton = styled.button<Props>`
  width: ${({ width }) => (width ? width : null)};
  padding: ${({ padding }) => (padding ? padding : "11px 23px")};
  margin: ${({ margin }) => (margin ? margin : null)};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : "20px"};
  display: flex;
  justify-content: center;
  border: 1px solid #ffffff;
  color: ${COLOR.WHITE};
  background: ${COLOR.BUTTON_BG};
  text-transform: uppercase;
  cursor: pointer;
  ${typography.btnSmall};
  &:hover {
    cursor: pointer;
    background: ${COLOR.BUTTON_BG_HOVER};
    box-shadow: 0px 2px 5px rgba(54, 54, 54, 0.1);
    border: 1px solid #ff740f;
  }
  &:active {
    box-shadow: 0px 3px 4px rgba(222, 125, 11, 0.2),
      0px 1px 10px rgba(249, 89, 8, 0.2);
  }
  &:disabled {
    background: ${COLOR.GREY_BLACK2};
    border: 1px solid #bfc4c9;
    color: ${COLOR.GREY_BLACK1};
  }
`;

export { StyledButton };
