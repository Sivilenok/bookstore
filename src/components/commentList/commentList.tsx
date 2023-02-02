import {
  RatingText,
  RatingWrapper,
  StarsWrapper,
  StyledStarsIcon,
} from "../../pages/book/styles";
import { IBook } from "../../types";
import {
  CommentSecondWrapper,
  CommentSubtitle,
  CommentText,
  CommentTitle,
  CommentTitleWrapper,
  CommentWrapper,
  StyledComment,
} from "./styles";

interface IProps {
  book: IBook;
}

export const CommentList = ({ book }: IProps) => (
  <StyledComment>
    <RatingWrapper>
      <RatingText>Рейтинг</RatingText>
      <StarsWrapper>
        <StyledStarsIcon />
      </StarsWrapper>
    </RatingWrapper>
    <CommentSecondWrapper>
      <CommentText>Подробная информация</CommentText>
      <CommentWrapper>
        <ul>
          <CommentTitleWrapper>
            <CommentTitle>Издательство</CommentTitle>{" "}
            <CommentSubtitle>Питер</CommentSubtitle>
          </CommentTitleWrapper>
          <CommentTitleWrapper>
            <CommentTitle>Год издания</CommentTitle>{" "}
            <CommentSubtitle>{book.year}</CommentSubtitle>
          </CommentTitleWrapper>
          <CommentTitleWrapper>
            <CommentTitle>Страниц</CommentTitle>
            <CommentSubtitle>288</CommentSubtitle>
          </CommentTitleWrapper>
          <CommentTitleWrapper>
            <CommentTitle>Переплёт</CommentTitle>
            <CommentSubtitle>Мягкий переплет</CommentSubtitle>
          </CommentTitleWrapper>
          <CommentTitleWrapper>
            <CommentTitle>Формат</CommentTitle>
            <CommentSubtitle>70х100</CommentSubtitle>
          </CommentTitleWrapper>
        </ul>
        <ul>
          <CommentTitleWrapper>
            <CommentTitle>Жанр</CommentTitle>
            <CommentSubtitle>Компьютерная литература</CommentSubtitle>
          </CommentTitleWrapper>
          <CommentTitleWrapper>
            <CommentTitle>Вес</CommentTitle>
            <CommentSubtitle>370 г</CommentSubtitle>
          </CommentTitleWrapper>
          <CommentTitleWrapper>
            <CommentTitle>ISBN</CommentTitle>
            <CommentSubtitle>978-5-4461-0923-4</CommentSubtitle>
          </CommentTitleWrapper>
          <CommentTitleWrapper>
            <CommentTitle>Изготовитель</CommentTitle>
            <CommentSubtitle>
              ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш,
              д. 73, лит. А29
            </CommentSubtitle>
          </CommentTitleWrapper>
        </ul>
      </CommentWrapper>
    </CommentSecondWrapper>
  </StyledComment>
);
