import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [1024];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const mainMenuStyle = css`
  flex-grow: 1;
  display: flex;
  align-items: center;
  z-index: 1;
  background: #fff;
  justify-content: center;

  ${mq({
    justifyContent: ['center', 'flex-end'],
  })};

  ul {
    list-style: none;
    display: flex;
    height: 44px;
    justify-content: center;
  }
`;

export default mainMenuStyle;
