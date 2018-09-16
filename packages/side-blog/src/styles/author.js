import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [1024];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const author = css`
  line-height: 1.7;
  font-size: 1em;
  display: flex;
  max-width: var(--textMaxWidth);
  margin: var(--spaceXL) auto;
  padding-top: ;
  border-top: 1px dotted #ddd;

  ${mq({
    padding: [
      'calc(var(--spaceXXL) * 1.5) var(--spaceXL) var(--spaceXL)',
      'calc(var(--spaceXXL) * 1.5) var(--spaceXXL) var(--spaceXL)',
    ],
  })};

  .avatar {
    width: 60px;
    height: 60px;
    margin: 0.4em var(--spaceXL) 0 0;
  }
`;

export default author;
