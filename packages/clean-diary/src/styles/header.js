import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [1024];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const header = css`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;

  ${mq({
    padding: ['60px 0;', '60px 0 50px;'],
  })};

  a {
    text-decoration: none;
  }
`;

export default header;
