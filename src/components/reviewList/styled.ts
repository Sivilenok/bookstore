import styled from "styled-components";
import { COLOR } from "../../config";
import { typography } from "../../ui";

const StyledReviewCard = styled.div`
  margin-bottom: 42px;
`;

const ReviewsWrapper = styled.div`
 
`;

const UserWrapper = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 16px;
`;

const ReviewInfo = styled.p`
  align-self: center;
  ${typography.bodySmall};
  color: ${COLOR.DARK};
`;

const ReviewText = styled.h5`
  ${typography.h5};
  color: ${COLOR.GREY_BLACK3};
`;

const ReviewsTitle = styled.h5`
  ${typography.h5};
  color: ${COLOR.DARK};
`;

const ReviewsNumber = styled.span`
  padding-left: 6px;
  ${typography.infoSmall}
  color: ${COLOR.GREY_BLACK1};
`;

export {
  StyledReviewCard,
  ReviewsNumber,
  ReviewsTitle,
  ReviewsWrapper,
  ReviewInfo,
  UserWrapper,
  ReviewText  
};
