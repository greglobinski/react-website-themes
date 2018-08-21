import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [768, 1024];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const heading = css`
  h1 {
    letter-spacing: -0.03em;
    margin-bottom: 1em;
    line-height: 1.2;
    border-left: 6px solid var(--firstActiveColor);
    padding-left: 15px;
    color: var(--lightTextColor);

    ${mq({
      fontSize: ['1.8em', '2em', '2.2em'],
    })};
  }
`;

export default heading;
