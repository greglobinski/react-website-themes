import { css } from 'emotion';

const circle = `
  background: white;
  border: 1px solid var(--lineColor);
  border-radius: 50%;
  content: '';
  height: 14px;
  left: 50%;
  position: absolute;
  width: 14px;
`;

const nextPrev = css`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid var(--lineColor);
  border-bottom: 1px solid var(--lineColor);
  padding: 60px 0;
  flex-direction: column;
  font-size: 1.3em;
  line-height: 1.2;
  position: relative;

  &:before {
    ${circle};
    top: 0;
    transform: translate(-50%, -50%);
  }

  &:after {
    ${circle};
    bottom: 0;
    transform: translate(-50%, 50%);
  }

  & svg {
    width: 30px;
    height: 30px;
    margin: 0 10px;
    flex-shrink: 0;
  }

  & a {
    text-decoration: none;
  }

  & .next,
  & .prev {
    display: flex;

    & > svg {
      flex-grow: 0;
    }
  }

  & .prev {
    & > p {
      padding: 0 50px 0 0;
    }
  }

  & .next {
    flex-direction: row-reverse;
    text-align: right;
    margin-top: 20px;

    & > p {
      padding: 0 0 0 50px;
    }
  }

  & time {
    display: block;
    font-size: 0.65em;
    font-family: var(--secondFontFamily);
    color: var(--lightTextColor);
    margin-top: 6px;
  }
`;

export default nextPrev;
