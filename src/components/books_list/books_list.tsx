import { IBook } from "../../types";
import { BookItem } from "../book_item/book_item";
import { StyledBooksList } from "./styles";

interface Props {
    $view: boolean;
    books: IBook[];
}

export const BookList = ({ $view, books}: Props) => (
    <StyledBooksList $display={$view}>
        {books.map((book) => (
            <BookItem key={book.id} book={book} $view={$view} />
        ))}
    </StyledBooksList>
);