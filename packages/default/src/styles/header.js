import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [1024];

const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const header = css`
  display: flex;
  margin-bottom: 50px;
  padding: 5px 5px 0;

  ${mq({
    flexDirection: ['column', 'row'],
    marginBottom: ['35px', '50px'],
  })};

  a {
    text-decoration: none;
  }
`;

export default header;
