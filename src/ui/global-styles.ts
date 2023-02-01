import { createGlobalStyle } from "styled-components";
import { COLOR } from "../config";
import { resetCSS } from "./resetCSS";

export const GlobalStyles = createGlobalStyle`
 ${resetCSS};
 body {
  position: relative;
  font-family: 'Montserrat', sans-serif;
  color: ${COLOR.DARK};
 }
`;
