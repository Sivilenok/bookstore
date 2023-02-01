import { css } from "styled-components";
import { Media } from "./media";

const h1 = css`
  font-weight: 500;
  font-size: 52px;
  line-height: 64px;
  ${Media.SM} {
    font-size: 32px;
    line-height: 40px;
  }
`;
const h2 = css`
  font-weight: 600;
  font-size: 44px;
  line-height: 54px;
  ${Media.SM} {
    font-size: 26px;
    line-height: 36px;
  }
`;
const h3 = css`
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  ${Media.SM} {
    font-size: 18px;
    line-height: 28px;
  }
`;

const h4 = css`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
`;

const h5 = css`
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
`;


const btnLarge = css`
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  ${Media.SM} {
    line-height: 20px;
  }
`;

const btnSmall = css`
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  ${Media.SM} {
    font-size: 12px;
  }
`;

const subtitle1 = css`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;
const subtitle2 = css`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
`;

const bodyLarge = css`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  ${Media.SM} {
    font-size: 15px;
    line-height: 20px;
  }
`;

const bodySmall = css`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  ${Media.SM} {
    font-size: 12px;
    line-height: 18px;
  }
`;

const infoLarge = css`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
`;

const infoSmall = css`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
`;


export const typography = {
  h1,
  h2,
  h3,
  h4,
  h5,
  btnLarge,
  btnSmall,
  subtitle1,
  subtitle2,
  bodyLarge,
  bodySmall,
  infoLarge,
  infoSmall,
};
