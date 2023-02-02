import { Link, NavLink, PathMatch } from "react-router-dom";
import styled from "styled-components";
import { COLOR } from "../../config";
import { typography } from "../../ui";

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 42px;
  list-style-type: none;
`;

const MenuTitle = styled.div`
  padding-bottom: 8px;
  ${typography.h5};
  background: ${COLOR.BUTTON_BG};
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
`;

const MenuItem = styled.nav`
  margin-bottom: 16px;
  ${typography.bodyLarge};
  color: ${COLOR.DARK};
  cursor: pointer;
  &:hover {
    color: ${COLOR.ACCENT};
  }
  &:active {
    margin-bottom: 12px;
    background:${COLOR.BUTTON_BG};
    -webkit-text-fill-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    ${typography.h5};
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 42px;

  ${typography.h5};
`;

const MenuLink = styled(Link)`
  background:${COLOR.DARK};
  -webkit-text-fill-color: transparent;
   background-clip: text;
  -webkit-background-clip: text;
  &:hover {
    background: ${COLOR.ACCENT};
    -text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;


const Border = styled.div`
  height: 1px;
  margin-bottom: 16px;
  background: ${COLOR.BUTTON_BG_HOVER};
`;

export {MenuLink, MenuWrapper, MenuTitle, MenuItem, LinksWrapper, Border };
