import { css } from 'emotion';

const nextPrev = css`
  display: flex;
  justify-content: space-between;

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
    flex-basis: 46%;
  }

  & .next {
    flex-direction: row-reverse;
    text-align: right;
  }

  & time {
    display: block;
    font-size: 0.9em;
    color: var(--lightTextColor);
    margin-top: 5px;
  }
`;

export default nextPrev;
