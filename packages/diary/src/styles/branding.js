import { css } from 'emotion';

import facepaint from 'facepaint';

const breakpoints = [1024];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const branding = css`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  margin: 10px 0 20px;
  align-items: center;
  justify-content: center;

  img {
    width: 50px;
    margin: 20px 0 10px;
  }

  h1 {
    font-size: 1.8em;
    letter-spacing: -0.01em;
    color: var(--textColor);
    text-align: center;
    line-height: 1.1;
    margin-bottom: 0.2em;
  }

  p {
    font-size: 1em;
    font-family: var(--secondFontFamily);
    letter-spacing: -0.01em;
  }

  a {
  }
`;

export default branding;
