import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [1024];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const menu = css`
  ul {
    list-style: none;
  }

  li {
    padding: 0 0 2.5em;
  }

  h3 {
    font-size: 1.4em;
    margin-bottom: 0.5em;
    line-height: 1.2;
  }

  a {
    text-decoration: none;
  }

  p {
    line-height: 1.4;
    padding-left: 10px;
  }
`;

export default menu;
