import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [768, 1024];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const heading = css`
  text-align: center;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--secondFontFamily);

    & svg {
      width: 18px;
      margin-left: 5px;
    }
  }

  h1 {
    letter-spacing: -0.01em;
    margin-bottom: 1em;
    line-height: 1.1;

    ${mq({
      fontSize: ['2em', '2.4em', '2.8em'],
    })};
  }

  .meta {
    font-family: var(--secondFontFamily);
    margin-top: -10px;

    strong {
      background: var(--accentColor);
      padding: 1px 6px;
      color: white;
      border-radius: 3px;
    }
  }
`;

export default heading;
