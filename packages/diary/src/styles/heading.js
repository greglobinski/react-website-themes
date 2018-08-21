import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [768, 1024];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const heading = css`
  h1 {
    letter-spacing: -0.03em;
    margin-bottom: 1em;
    line-height: 1.1;

    ${mq({
      fontSize: ['2em', '2.4em', '2.8em'],
    })};
  }
`;

export default heading;
