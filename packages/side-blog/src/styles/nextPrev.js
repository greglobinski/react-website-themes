import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [768];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const nextPrev = css`
  background: var(--nextPrevBgColor);
  display: flex;
  flex-direction: column;
  font-size: 1.2em;
  line-height: 1.2;
  position: relative;

  ${mq({
    flexDirection: ['column', 'row'],
  })};

  & svg {
    width: 30px;
    height: 30px;
    flex-shrink: 0;
  }

  & a {
    text-decoration: none;
  }

  & .next,
  & .prev {
    display: flex;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 50%;
    padding: 20px;

    & > svg {
      flex-grow: 0;
    }
  }

  & .prev {
    ${mq({
      borderRight: [0, '1px dashed var(--brightColor)'],
      borderBottom: ['1px dashed var(--brightColor)', 0],
    })};

    & > svg {
      margin-right: 10px;
    }
  }

  & .next {
    margin-right: 1px;
    flex-direction: row-reverse;
    text-align: right;

    & > svg {
      margin-left: 10px;
    }
  }

  & time {
    display: block;
    font-size: 0.65em;
    font-family: var(--firstFontFamily);
    color: var(--lightTextColor);
    margin-top: 6px;
  }
`;

export default nextPrev;
