import { SeporationIcon } from "../../assets";
import { Button } from "../button/button";
import { ReviewItem } from "../reviewItem/reviewItem";
import { ReviewsNumber, ReviewsTitle, ReviewsWrapper } from "./styled";

interface IProps {
  rating: number;
}

export const ReviewsList = ({ rating }: IProps) => {
  const text =
    "Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект не оставляет шанса для анализа существующих паттернов поведения. Для современного мира внедрение современных методик предоставляет широкие возможности для позиций, занимаемых участниками в отношении поставленных задач. Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики выводы будут в равной степени предоставлены сами себе. Вот вам яркий пример современных тенденций — глубокий уровень погружения создаёт предпосылки для своевременного выполнения сверхзадачи. И нет сомнений, что акционеры крупнейших компаний, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.";
  return (
    <ReviewsWrapper>
      <ReviewsTitle>
        Отзывы<ReviewsNumber>2</ReviewsNumber>
      </ReviewsTitle>
      <SeporationIcon />
      <ReviewItem rating={rating} date="5 января 2019" name="Иван Иванов" />
      <ReviewItem
        rating={rating}
        date="20 июня 2018"
        name="Николай Качков"
        text={text}
      />
      <ReviewItem
        rating={rating}
        date="18 февраля 2018"
        name="Екатерина Беляева"
      />
      <Button
              borderRadius="30px"
              padding="16px 23px"
              width="40%"
              title="оценить книгу" margin={""} />
    </ReviewsWrapper>
  );
};
