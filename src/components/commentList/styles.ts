import styled from "styled-components";
import { COLOR } from "../../config";
import { Media, typography } from "../../ui";

const CommentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  grid-column-gap: 100px;
  ${Media.SM} {
    grid-template-columns: 1fr;
    grid-row-gap: 16px;
  }
`;

const CommentSecondWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;


const CommentTitle = styled.p`
  ${typography.bodySmall}
  color: ${COLOR.GREY_BLACK1};
`;

const CommentSubtitle = styled.p`
  text-align: left;
  ${typography.infoSmall};
  color: ${COLOR.GREY};
`;

const CommentTitleWrapper = styled.li`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  margin-bottom: 16px;
`;

const StyledComment = styled.div`
  margin-bottom: 62px;
`;

const CommentText = styled.h5`
  margin-bottom: 32px;
  ${typography.h5};
`;

export {
  StyledComment,
  CommentText,
  CommentTitleWrapper,
  CommentSubtitle,
  CommentWrapper,
  CommentTitle,
  CommentSecondWrapper
};
