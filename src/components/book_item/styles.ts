import styled from "styled-components";
import { COLOR } from "../../config";
import { Media, typography } from "../../ui";

interface Props {
  stars: number;
}

const StyledBookItem = styled.div<{ $display: boolean }>`
  display: ${({ $display }) => ($display ? "grid" : "flex")};
  flex-direction: ${({ $display }) => ($display ? "none" : "column")};
  gap: 16px;
  grid-template-columns: ${({ $display }) => ($display ? "0.5fr 2fr" : "none")};
  min-height: ${({ $display }) => ($display ? "218px" : "470px")};
  padding: ${({ $display }) =>
    $display ? "24px 16px 24px 16px" : "8px 8px 16px 8px"};
  box-shadow: 0px 2px 4px rgba(191, 196, 201, 0.2),
    0px 3px 4px rgba(191, 196, 201, 0.18), 0px 1px 5px rgba(191, 196, 201, 0.24);
  border-radius: 10px;
  ${Media.SM} {
    width: 100%;
    height: 100%;
  }
`;

const BookDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`;

const BookTitle = styled.div`
  ${typography.subtitle2};
  color: ${COLOR.DARK};
`;

const SubTitle = styled.div`
  ${typography.bodySmall};
  color: ${COLOR.GREY};
`;

const BookImage = styled.img<{ $view: boolean }>`
  width: ${({ $view }) => ($view ? "120px" : "100%")};
  height: ${({ $view }) => ($view ? "170px" : "none")};
  background: url(./image/book.png);
  ${Media.SM} {
    width: 174px;
    height: 242px;
  }
`;

const Rating = styled.div<Props>`
  display: flex;
  justify-content: space-between;
`;

export { StyledBookItem, BookImage, Rating, BookDesc, BookTitle, SubTitle };
