import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [1024];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const comments = css`
  border-top: 1px dashed var(--brightColor);
  background: var(--commentsBgColor);

  ${mq({
    padding: ['var(--spaceXL)', 'var(--spaceXL) var(--spaceXXL)'],
  })};
`;

export default comments;
