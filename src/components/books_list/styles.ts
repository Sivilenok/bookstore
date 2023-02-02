import styled from "styled-components";
import { ListStyle } from "../../types";
import { Media } from "../../ui";

const StyledBooksList = styled.ul<{ $listStyle: ListStyle }>`
display: grid;
grid-template-columns: ${({ $listStyle }) =>
  $listStyle === 'window' ? 'repeat(auto-fill, minmax(190px,1fr))' : '1fr'};
align-items: center;
grid-column-gap: 22px;
grid-row-gap: 24px;
${Media.SM} {
  align-items: center;
  justify-content: center;
  flex-grow: 1;
}
`;

export { StyledBooksList };
