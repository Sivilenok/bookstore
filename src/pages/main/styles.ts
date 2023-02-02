import styled from "styled-components";
import { SortIcon } from "../../assets";
import { COLOR } from "../../config";
import { Media, typography } from "../../ui";

const StyledMainPage = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 10px;
  margin-bottom: 62px;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  ${Media.SM} {
    width: 32px;
    height: 32px;
    border: none;
    border-radius: 50%;
    background: ${COLOR.WHITE};
    box-shadow: 0px 2px 4px rgba(191, 196, 201, 0.2), 0px 3px 4px rgba(191, 196, 201, 0.18),
      0px 1px 5px rgba(191, 196, 201, 0.24);
  }
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

const SearchWrapper = styled.div`
  display: flex;
  justify-self: end;
  gap: 16px;
`;

const Search = styled.button<{ $view: boolean }>`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 50%;
  padding: 10px;
  filter: drop-shadow(0px 2px 4px rgba(191, 196, 201, 0.2)) drop-shadow(0px 3px 4px rgba(191, 196, 201, 0.18))
    drop-shadow(0px 1px 5px rgba(191, 196, 201, 0.24));
  background: ${({ $view }) =>
    $view ? `${COLOR.BUTTON_BG_HOVER}` : `${COLOR.WHITE}`};
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

const StyledSearch = styled.input`
  width: 350px;
  padding: 10px 10px 10px 40px;
  border: none;
  border-radius: 599px;
  background: ${COLOR.WHITE};
  box-shadow: 0px 2px 4px rgba(191, 196, 201, 0.2),
    0px 3px 4px rgba(191, 196, 201, 0.18), 0px 1px 5px rgba(191, 196, 201, 0.24);
  outline: none;
  &::placeholder {
    ${typography.bodySmall};
    color: ${COLOR.GREY_BLACK2};
  }
`;

const InputDecscr = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 16px;
  margin: 20px 0;
  ${Media.SM} {
    display: flex;
    gap: 16px;
  }
`;


const RatingButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 15px;
  border: none;
  padding: 8px 16px;
  box-shadow: 0px 2px 4px rgba(191, 196, 201, 0.2), 0px 3px 4px rgba(191, 196, 201, 0.18),
    0px 1px 5px rgba(191, 196, 201, 0.24);
  background-color: ${COLOR.WHITE};
  ${typography.bodySmall};
  color: ${COLOR.GREY_BLACK2};
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

const StyledSortIcon = styled(SortIcon)`
  margin: 0px 8px 0px 0px;
`;

export { InputDecscr, InputWrapper, StyledMainPage, MainWrapper, SearchWrapper, Search, StyledSearch, RatingButton, StyledSortIcon };
