import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [768, 1024];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const heading = css`
  h1 {
    max-width: var(--textMaxWidth);
    letter-spacing: -0.04em;
    margin: 0 auto var(--spaceXXL);
    line-height: 1.1;
    color: var(--headingColor);
    padding: 0 var(--spaceXL);

    ${mq({
      fontSize: ['2em', '2.3em', '2.6em'],
    })};
  }
`;

export default heading;
