import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [1024];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const layoutSidebar = css`
  padding: 15px 25px;

  ${mq({
    marginLeft: ['0', '320px'],
  })};

  &.entry {
    /*background: red;*/
  }
`;

export default layoutSidebar;
