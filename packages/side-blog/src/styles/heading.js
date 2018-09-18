import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [1024];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const heading = css`
  h1 {
    max-width: var(--textMaxWidth);
    letter-spacing: -0.04em;
    margin: 0 auto var(--spaceXXL);
    line-height: 1.1;
    color: var(--headingColor);

    ${mq({
      fontSize: ['2em', '2.3em', '2.6em'],
      padding: ['0 var(--spaceXL)', '0 var(--spaceXXL)'],
    })};

    small {
      font-size: 0.4em;
      display: block;
      font-weight: 300;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      margin: 0.5em 0;
    }

    span {
      font-size: 0.5em;
      display: block;
      font-weight: 300;
      letter-spacing: 0;
      margin: 0.5em 0;
    }
  }

  &.special {
    text-align: center;
    margin-top: 2em;

    h1 {
      letter-spacing: -0.05em;

      ${mq({
        fontSize: ['2.5em', '2.8em', '3.2em'],
      })};
    }
  }
`;

export default heading;
