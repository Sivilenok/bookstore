import styled from "styled-components";
import { Media } from "../../ui";

const StyledBooksList = styled.div<{ $display: boolean }>`
  display: grid;
  grid-template-columns: ${({ $display }) => ($display ? 'auto' : 'repeat(4,1fr)')};
  grid-column-gap: 21px;
  grid-row-gap: ${({ $display }) => ($display ? '15px' : '25px')};
  ${Media.MD} {
    grid-template-columns: ${({ $display }) => ($display ? 'auto' : 'repeat(3,1fr)')};
  }
  ${Media.LG} {
    grid-template-columns: ${({ $display }) => ($display ? 'auto' : 'repeat(3,1fr)')};
  }
  ${Media.SM} {
    display: flex;
    flex-direction: column;
    grid-template-columns: ${({ $display }) => ($display ? 'none' : 'none')};
  }
`;

export { StyledBooksList };
