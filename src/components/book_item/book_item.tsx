import { generatePath, Link, useNavigate } from "react-router-dom";
import { Book } from "../../assets";
import { ROUTE } from "../../router";
import { IBook, ListStyle } from "../../types"
import { Button } from "../button/button";
import { BookDesc, BookImage, BookTitle, Figure, Rating, StyledBookItem, SubTitle, Wrapper } from "./styles";

interface Props {
  listStyle: ListStyle;
  book: IBook;
}

export const BookItem = ({listStyle, book}: Props) => {
  const { id, title, author, rating, category} = book;
  const navigate = useNavigate();

  return (
    <StyledBookItem $listStyle={listStyle} data-test-id='card' onClick={() => navigate(generatePath(ROUTE.DETAILS, {id}))}>
       <Figure>
         <BookImage src={Book} alt={title}/>
       </Figure>
        <BookDesc>
          <SubTitle>{author}</SubTitle>
          <Rating stars={rating} />
        </BookDesc>
        <Link to={generatePath(ROUTE.ROOT + ROUTE.DETAILS, {category, id })}/>
        <BookTitle as={listStyle === 'list' ? 'h5' : 'p'} $listStyle={listStyle}>{title}</BookTitle>
          <Button title='Забронировать' width={""} padding={""} margin={""} borderRadius={""} />
    </StyledBookItem>
  )
}

