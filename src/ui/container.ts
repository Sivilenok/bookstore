import styled from "styled-components";
import { Media } from "./media";

export const Container = styled.div`
  min-height: 100vh;
  width: 1110px;
  margin: 0 auto;
  padding: 32px 15px 0;
  display: grid;
  grid-template-rows: 1fr;
  grid-row-gap: 42px;
  ${Media.MD} {
    width: 640px;
    padding-top: 0;
  }
  ${Media.SM} {
    width: calc(100% - 30px);
  }
`;