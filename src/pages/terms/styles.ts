import styled from "styled-components";
import { COLOR } from "../../config";
import { Media, typography } from "../../ui";

const StyledTerms = styled.div`
  display: grid;
  grid-template-columns: 279px auto;
  gap: 30px;
  margin-bottom: 62px;
  ${Media.MD} {
    grid-template-columns: none;
  }
`;


const MainListTerms = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-left: 0;
  margin-top: 32px;
  list-style: none;
  counter-reset: li;
`;

const MainListItem = styled.li`
  ${typography.bodyLarge};
  &:before {
    counter-increment: li;
    content: counters(li, ".") ". ";
  }
`;

const SubListTerms = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-left: 30px;
  list-style: none;
  counter-reset: li;
`;

const SubListItem = styled.li`
  color: ${COLOR.GREY};
  ${typography.bodySmall};
  &:first-child {
    margin-top: 16px;
  }
  &:before {
    counter-increment: li;
    content: counters(li, ".") ". ";
  }
`;

export { MainListTerms, MainListItem, SubListTerms, SubListItem, StyledTerms };
