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
  }

  &.home {
    text-align: center;

    h1 {
      ${mq({
        fontSize: ['2.8em', '3.2em', '3.6em'],
      })};
    }
  }
`;

export default heading;
