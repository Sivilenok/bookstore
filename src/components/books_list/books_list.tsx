import { IBook, ListStyle } from "../../types";
import { BookItem } from "../book_item/book_item";
import { StyledBooksList } from "./styles";

interface Props {
    listStyle: ListStyle;
    books: IBook[];
}

export const BookList = ({ listStyle, books}: Props) => (
    <StyledBooksList $listStyle={listStyle}>
        {books.map((book) => (
            <BookItem key={book.id} book={book} listStyle={listStyle} />
        ))}
    </StyledBooksList>
);