import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [768, 1024];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const headingStyle = css`
  h1 {
    letter-spacing: -0.03em;
    margin-bottom: 1em;

    ${mq({
      fontSize: ['1.8em', '2.1em', '2.4em'],
    })};
  }
`;

export default headingStyle;
