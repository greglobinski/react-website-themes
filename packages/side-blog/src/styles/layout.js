import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [1024];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const layout = css`
  main {
    ${mq({
      marginLeft: [0, 'var(--desktopSidebarWidth)'],
      width: ['100%', 'auto'],
    })};
  }
`;

export default layout;
