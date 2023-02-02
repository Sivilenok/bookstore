import styled, { css } from "styled-components";
import { COLOR } from "../../config";
import { ListStyle } from "../../types";
import { Media, typography } from "../../ui";

interface Props {
  stars: number;
}
const windowStyles = css`
  display: flex;
  flex-direction: column;
  padding: 8px;
  padding-bottom: 16px;
  gap: 16px;
  ${Media.SM} {
    padding: 16px;
    img {
      width: 174px;
      height: 242px;
    }
  }
`;

const listStyles = css`
  display: grid;
  padding: 24px;
  padding-left: 16px;
  grid-template-areas:
    'imageBook link link'
    'imageBook rating button';
  grid-gap: 16px;
  align-items: center;
  a {
    align-self: baseline;
    display: grid;
    grid-area: link;
    grid-template-areas:
      'title title title'
      'author author author';
    grid-row-gap: 16px;
    ${Media.SM} {
      grid-row-gap: 5px;
      grid-template-areas:
        'title title'
        'author author';
    }
  }
  ${Media.SM} {
    align-items: stretch;
    grid-row-gap: 5px;
    grid-template-areas:
      'imageBook link'
      'imageBook rating'
      'imageBook button';
    padding: 16px 8px;
    img {
      width: 70px;
      height: 100px;
    }
  }
`;

const StyledBookItem = styled.li<{ $listStyle: ListStyle }>`
box-shadow: 0px 2px 4px rgba(191, 196, 201, 0.2), 0px 3px 4px rgba(191, 196, 201, 0.18),
  0px 1px 5px rgba(191, 196, 201, 0.24);
border-radius: 10px;
${({ $listStyle }) => ($listStyle === 'window' ? windowStyles : $listStyle)}
`;
const Figure = styled.figure`
  display: flex;
  ${Media.SM} {
    justify-content: center;
  }
  grid-area: imageBook;
`;


const BookDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`;

const BookTitle  = styled.p<{ $listStyle: ListStyle }>`
max-height: 54px;
text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;
${({ $listStyle }) => ($listStyle === 'window' ? typography.bodySmall : typography.h5)};
color: ${COLOR.DARK};
grid-area: title;
`;
const SubTitle = styled.div`
  ${typography.bodySmall};
  color: ${COLOR.GREY};
`;

const BookImage = styled.img`
  width: 174px;
  height: 242px;
  flex-grow: 1;
  border: 1px solid ${COLOR.GREY_BLACK4};
  border-radius: 10px;
  border: none;
  ${Media.SM} {
    width: 174px;
    height: 242px;
  }
`;

const Rating = styled.div<Props>`
  display: flex;
  justify-content: space-between;
`;

export { windowStyles, listStyles, Figure, StyledBookItem, BookImage, Rating, BookDesc, BookTitle, SubTitle };
