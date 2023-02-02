import styled from "styled-components";
import { StarsIcon } from "../../assets";
import { COLOR } from "../../config";
import { Media, typography } from "../../ui";

const StyledBookPage = styled.div`
  display: flex;
  flex-direction: column;
`;

const BreadcrumbsWrapper = styled.div`
  width: 100%;
  padding: 20px 0;
  margin-bottom: 52px;
  background: ${COLOR.GREY_BLACK4};
  ${Media.MD} {
    top: 70px;
  }
  ${Media.SM} {
    top: 60px;
  }
`;

const Breadcrumbs = styled.div`
  width: 1110px;
  margin: 0 auto;
  padding: 0 15px;
  ${typography.bodySmall};
  color: ${COLOR.GREY_BLACK2};
  ${Media.MD} {
    width: 640px;
  }
  ${Media.SM} {
    width: calc(100% - 30px);
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  ${Media.MD} {
    align-items: baseline;
  }
  ${Media.SM} {
    justify-self: center;
  }
`;

const DescrImage = styled.img`
  width: 445px;
  height: 594px;
  border-radius: 10px;
  border: 1px solid ${COLOR.GREY_BLACK3};
  ${Media.MD} {
    width: 136px;
    height: 198px;
  }
`;

const BookInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 30px;
  margin-bottom: 42px;
  ${Media.SM} {
    justify-content: center;
    grid-template-areas:
      "bookPoster"
      "infoWrapper"
      "descriptionBook";
  }
`;

const BookDescrTitle = styled.div`
  ${typography.h5};
`;

const Author = styled.h5`
  margin-top: 24px;
  margin-bottom: 32px;
  ${typography.h5};
  color: ${COLOR.GREY_BLACK2};
`;

const DescrBook = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  grid-area: descriptionBook;
`;

const DescrTitle = styled.div`
  ${typography.h5};
  margin-bottom: 32px;
`;

const DescrText = styled.div`
  ${typography.bodyLarge};
  color: ${COLOR.GREY};
  margin-bottom: 32px;
`;

const RatingWrapper = styled.div`
  width: 33%;
  margin-bottom: 62px;
`;

const RatingText = styled.div`
  margin-top: 40px;
  ${typography.h5};
`;

const StyledStarsIcon = styled(StarsIcon)`
  margin-top: 20px;
`;

const StarsWrapper = styled.div`
  width: 350px;
  border-top: 1px solid ${COLOR.GREY_BLACK3};
  margin-top: 16px;
`;

const ReviewWrap = styled.div`

`;

export {
  StyledBookPage,
  DescrImage,
  BreadcrumbsWrapper,
  Breadcrumbs,
  ImageWrapper,
  BookInfo,
  BookDescrTitle,
  Author,
  DescrBook,
  DescrTitle,
  DescrText,
  RatingWrapper,
  RatingText,
  StyledStarsIcon,
  StarsWrapper,
  ReviewWrap
};
