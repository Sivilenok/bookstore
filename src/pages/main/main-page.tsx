import { BookList, Menu } from "../../components";
import { MainWrapper, StyledMainPage } from "./styles";
import data from "../../services/books.json";
import { useState } from "react";
import { Search } from "../../components/search/search";
import { useWindowSize } from "../../hooks";

export const MainPage = () => {
  const allBooks = Object.values(data).flatMap((books) => books);
  const [$view, setView] = useState(false);

  const handleList = () => {
    setView(true);
  };
  const handleTile = () => {
    setView(false);
  };
  return (
    <StyledMainPage>
      <Menu />
      <MainWrapper>
        <Search handleList={handleList} handleTile={handleTile} $view={$view} />
        <BookList books={allBooks} $view={false} />
      </MainWrapper>
    </StyledMainPage>
  );
};
