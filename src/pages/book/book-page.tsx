import { Book } from "../../assets";
import {
  Author,
  BookDescrTitle,
  BookInfo,
  Breadcrumbs,
  BreadcrumbsWrapper,
  DescrImage,
  DescrText,
  DescrTitle,
  ImageWrapper,
  ReviewWrap,
  StyledBookPage,
} from "./styles";
import data from "../../services/books.json";
import { Button, CommentList, ReviewsList } from "../../components";
import { useParams } from "react-router-dom";

export const BookPage = () => {
  const { id } = useParams();
  const book = Object.values(data)
    .flatMap((books) => books)
    .filter((bookId) => bookId.id === id);
  const { title, rating } = book[0];
 

  return (
    <StyledBookPage>
      <BreadcrumbsWrapper>
        <Breadcrumbs>
          Бизнес-книги / Грокаем алгоритмы. Иллюстрированное пособие для
          программистов и любопытствующих
        </Breadcrumbs>
      </BreadcrumbsWrapper>
      <BookInfo>
        <ImageWrapper>
          <DescrImage src={Book} alt={title} />
        </ImageWrapper>
        <div>
          <BookDescrTitle>
            Грокаем алгоритмы. Иллюстрированное пособие для программистов и
            любопытствующих
          </BookDescrTitle>
          <Author>Адитья Бхаргава, 2019</Author>
          <Button
            title="Забронировать"
            width="60%"
            padding="14px 95px"
            margin="0px 0px 62px 0px"
            borderRadius=""
          />
          <DescrTitle>О книге</DescrTitle>
          <DescrText>
            Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и
            большинство таких задач уже были кем-то решены, протестированы и
            проверены. Можно, конечно, погрузится в глубокую философию
            гениального Кнута, изучить многостраничные фолианты с
            доказательствами и обоснованиями, но хотите ли вы тратить на это
            свое время?
          </DescrText>
          <DescrText>
            Откройте великолепно иллюстрированную книгу и вы сразу поймете, что
            алгоритмы — это просто. А грокать алгоритмы — это веселое и
            увлекательное занятие.
          </DescrText>
        </div>
      </BookInfo>
        <ReviewWrap>
          <CommentList book={book[0]} />
          <ReviewsList rating={rating} /> 
        </ReviewWrap>
               
    
    </StyledBookPage>
  );
};
