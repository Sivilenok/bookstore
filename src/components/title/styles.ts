import styled from "styled-components";
import { typography } from "../../ui";

export type ChoiceTitle = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

export const StyledTitle = styled.div<{ $choice: ChoiceTitle }>`
  ${({ $choice }) => typography[$choice]};
`;