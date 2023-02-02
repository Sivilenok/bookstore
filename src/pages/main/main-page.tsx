import { BookList, Menu } from "../../components";
import {
  InputDecscr,
  InputWrapper,
  MainWrapper,
  RatingButton,
  Search,
  SearchWrapper,
  StyledMainPage,
  StyledSearch,
  StyledSortIcon,
} from "./styles";
import data from "../../services/books.json";
import { useState } from "react";
import { ListStyle } from "../../types";
import { ListIcon, TileIcon } from "../../assets";

export const MainPage = () => {
  const allBooks = Object.values(data).flatMap((books) => books);
  const [styleList, setStyleList] = useState<ListStyle>("window");

  const handleWindow = () => setStyleList("window");
  const handleList = () => setStyleList("list");

  return (
    <StyledMainPage>
      <Menu />
      <MainWrapper>
        <InputWrapper>
          <InputDecscr>
            <StyledSearch type="search" placeholder="Поиск книги или автора…" />
            <RatingButton>
              <StyledSortIcon />
              По рейтингу
            </RatingButton>
          </InputDecscr>
          <SearchWrapper>
            <Search
              onClick={handleWindow}
              $view={styleList === "window"}
              data-test-id="button-menu-view-window"
            >
              <TileIcon />
            </Search>
            <Search
              onClick={handleList}
              $view={styleList === "list"}
              data-test-id="button-menu-view-list"
            >
              <ListIcon />
            </Search>
          </SearchWrapper>
        </InputWrapper>

        <BookList books={allBooks} listStyle={styleList} />
      </MainWrapper>
    </StyledMainPage>
  );
};
