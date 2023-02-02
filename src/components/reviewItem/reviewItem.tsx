import { ReviewAva, StarsIcon } from "../../assets";
import { ReviewInfo, ReviewText, ReviewUserWrapper, StyledReviewItem } from "./styles";

interface IProps {
    name: string;
    date: string;
    text?: string;
    rating: number;
  }
  
  export const ReviewItem = ({ name, date, text }: IProps) => (
    <StyledReviewItem>
      <ReviewUserWrapper>
        <img src={ReviewAva} alt='user' />
        <ReviewInfo>{name}</ReviewInfo>
        <ReviewInfo>{date}</ReviewInfo>
      </ReviewUserWrapper>
      <StarsIcon/>
      <ReviewText>{text}</ReviewText>
    </StyledReviewItem>
  );