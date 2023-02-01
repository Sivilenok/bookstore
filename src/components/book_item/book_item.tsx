import { bookImage, CatIcon } from "../../assets";
import { IBook } from "../../types"
import { Button } from "../button/button";
import { BookDesc, BookImage, BookTitle, Rating, StyledBookItem, SubTitle } from "./styles";

interface Props {
  $view: boolean;
  book: IBook;
}

export const BookItem = ({$view, book}: Props) => {
  const { image, title, author, rating } = book;
  
  return (
    // @ts-ignore
    <StyledBookItem>
      {image ? <BookImage $view={$view} src={bookImage} alt={title} /> : <CatIcon />}
      {$view ? (
        <BookDesc>
          <BookTitle>{title}</BookTitle>
          <SubTitle>{author}</SubTitle>
          <Rating stars={rating} />
          <Button title='Забронировать' width="" padding="" margin="" borderRadius="" />
        </BookDesc>
      ) : (
        <BookDesc>
          <Rating stars={rating} />
          <BookTitle>{title}</BookTitle>
          <SubTitle>{author}</SubTitle>
          <Button title='Забронировать' width={""} padding={""} margin={""} borderRadius={""} />
        </BookDesc>
      )}
    </StyledBookItem>
  )
}

