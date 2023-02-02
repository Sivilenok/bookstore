import styled from "styled-components";
import { COLOR } from "../../config";
import { typography } from "../../ui";

const StyledReviewItem = styled.div`
  margin-bottom: 42px;
`;

const ReviewUserWrapper = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 16px;
  margin: 18px 0;

`;

const ReviewInfo = styled.p`
  align-self: center;
  ${typography.bodySmall};
  color: ${COLOR.GREY_BLACK2};
`;

const ReviewText = styled.p`
  ${typography.bodySmall};
  color: ${COLOR.GREY};
  margin: 16px 0;
`;

export { ReviewInfo, ReviewUserWrapper, ReviewText, StyledReviewItem };
