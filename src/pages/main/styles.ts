import styled from "styled-components";
import { Media } from "../../ui";

const StyledMainPage = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 10px;
  margin-bottom: 62px;
`;

const MainWrapper = styled.div`
  display: grid;
  align-items: center;
  margin-left: 25px;
  ${Media.MD} {
    grid-template-columns: 4fr 1fr;
  }
  ${Media.SM} {
    grid-template-columns: 1fr 1fr;
  }
`;

export { StyledMainPage, MainWrapper };
