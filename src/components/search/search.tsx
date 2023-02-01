import {
  DirectionWrapper,
  ListButton,
  RatingButton,
  SearchWrapper,
  StyledListIcon,
  StyledSearch,
  StyledSearchWrapper,
  StyledSortIcon,
  StyledTileIcon,
  TileButton,
} from "./styles";

interface Props {
  handleTile: () => void;
  handleList: () => void;
  $view: boolean;
}

export const Search = ({ $view, handleTile, handleList }: Props) => (
  <StyledSearchWrapper>
    <SearchWrapper>
      <StyledSearch type="search" placeholder="Поиск книги или автора…" />
      <RatingButton>
        <StyledSortIcon />
        По рейтингу
      </RatingButton>
    </SearchWrapper>
    <DirectionWrapper>
      <TileButton $view={$view} onClick={handleTile}>
        <StyledTileIcon $view={$view} />
      </TileButton>
      <ListButton $view={$view} onClick={handleList}>
        <StyledListIcon $view={$view} />
      </ListButton>
    </DirectionWrapper>
  </StyledSearchWrapper>
);
