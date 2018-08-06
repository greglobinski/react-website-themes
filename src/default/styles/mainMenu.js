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

  ${mq({
    justifyContent: ['center', 'flex-end'],
    position: ['fixed', 'relative'],
    bottom: [0, 'auto'],
    left: [0, 'auto'],
    right: [0, 'auto'],
    borderTop: ['1px dotted #ddd', 0],
    height: ['54px', '32px'],
  })};

  ul {
    list-style: none;
    display: flex;

    ${mq({
      height: ['44px', '32px'],
      flexBasis: ['60%', 'auto'],
      justifyContent: ['space-around', 'çenter'],
    })};
  }
`;

export default mainMenuStyle;
