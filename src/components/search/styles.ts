import styled from "styled-components";
import { ListIcon, SearchIcon, SortIcon, TileIcon } from "../../assets";
import { COLOR } from "../../config";
import { Media, typography } from "../../ui";

const StyledSearchWrapper = styled.div`
  display: grid;
  grid-template-columns: 500px 96px;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 30px;
  ${Media.MD} {
    grid-template-columns: 4fr 1fr;
  }
  ${Media.SM} {
    grid-template-columns: 1fr 1fr;
  }
`;

const SearchWrapper = styled.div`
  display: grid;
  grid-template-columns: 2.3fr 1fr;
  grid-column-gap: 16px;
`;

const StyledSearchIcon = styled(SearchIcon)`
  ${Media.SM} {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const RatingButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 16px;
  background: ${COLOR.WHITE};
  border: none;
  border-radius: 599px;
  box-shadow: 0px 2px 4px rgba(191, 196, 201, 0.2),
    0px 3px 4px rgba(191, 196, 201, 0.18), 0px 1px 5px rgba(191, 196, 201, 0.24);
  ${typography.bodySmall};
  color: ${COLOR.GREY_BLACK2};
  outline: none;
  cursor: pointer;
`;

const StyledSortIcon = styled(SortIcon)`
  margin: 0px 8px 0px 0px;
`;

const StyledSearch = styled.input`
  width: 100%;
  padding: 10px 10px 10px 40px;
  border: none;
  border-radius: 599px;
  background: ${COLOR.WHITE};
  box-shadow: 0px 2px 4px rgba(191, 196, 201, 0.2),
    0px 3px 4px rgba(191, 196, 201, 0.18), 0px 1px 5px rgba(191, 196, 201, 0.24);
  outline: none;
  &::placeholder {
    ${typography.bodySmall};
    color: ${COLOR.GREY};
  }
`;

const RatingInput = styled.input`
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 15px;
  border: none;
  padding: 8px 16px;
  box-shadow: 0px 2px 4px rgba(191, 196, 201, 0.2),
    0px 3px 4px rgba(191, 196, 201, 0.18), 0px 1px 5px rgba(191, 196, 201, 0.24);
  background-color: ${COLOR.WHITE};
  ${typography.bodySmall};
  &::placeholder {
    color: ${COLOR.GREY_BLACK2};
  }
  &:hover {
    cursor: pointer;
  }
  ${Media.SM} {
    width: 32px;
    height: 32px;
    justify-content: center;
    padding: 0;
  }
`;

const DirectionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const TileButton = styled.button<{ $view: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 38px;
  width: 38px;
  border: none;
  border-radius: 50%;
  background: ${({ $view }) =>
    $view ? `${COLOR.BUTTON_BG_HOVER}` : `${COLOR.WHITE}`};
  filter: ${({ $view }) =>
    $view
      ? "drop-shadow(0px 2px 4px rgba(191, 196, 201, 0.2)) drop-shadow(0px 3px 4px rgba(191, 196, 201, 0.18)) drop-shadow(0px 1px 5px rgba(191, 196, 201, 0.24))"
      : "#ffffff"};
  cursor: pointer;
  path {
    fill: ${({ $view }) => ($view? COLOR.WHITE : COLOR.GREY)};
  }
  &:hover {
    cursor: pointer;
  }
  ${Media.SM} {
    width: 32px;
    height: 32px;
  }
`;
const StyledTileIcon = styled(TileIcon)<{ $view: boolean }>`
  & path {
    fill: ${({ $view }) => ($view ? `${COLOR.GREY_BLACK1}` : `${COLOR.WHITE}`)};
  }
`;

const ListButton = styled.button<{ $view: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 38px;
  width: 38px;
  border: none;
  border-radius: 50%;
  background: ${({ $view }) =>
    $view ? `${COLOR.BUTTON_BG_HOVER}` : `${COLOR.WHITE}`};
  filter: ${({ $view }) =>
    $view
      ? "${COLOR.WHITE}"
      : "drop-shadow(0px 2px 4px rgba(191, 196, 201, 0.2)) drop-shadow(0px 3px 4px rgba(191, 196, 201, 0.18)) drop-shadow(0px 1px 5px rgba(191, 196, 201, 0.24))"};
  cursor: pointer;
`;

const StyledListIcon = styled(ListIcon)<{ $view: boolean }>`
  & path {
    fill: ${({ $view }) => ($view ? `${COLOR.WHITE}` : `${COLOR.GREY}`)};
  }
`;

export {
  RatingButton,
  RatingInput,
  StyledSortIcon,
  DirectionWrapper,
  TileButton,
  StyledTileIcon,
  ListButton,
  StyledListIcon,
  StyledSearchWrapper,
  SearchWrapper,
  StyledSearchIcon,
  StyledSearch,
};
