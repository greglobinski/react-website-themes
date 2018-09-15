import { css } from 'emotion';

import facepaint from 'facepaint';

const breakpoints = [768, 1024];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const branding = css`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  align-items: center;
  justify-content: center;

  img {
    margin: 0 0 10px;
    width: 40px;

    ${mq({
      width: ['30px', '40px', '50px'],
    })};
  }

  h1 {
    color: var(--textColor);
    text-align: center;
    line-height: 1.1;
    margin-bottom: 0.2em;
    text-transform: uppercase;
    ${mq({
      fontSize: ['1.4em', '1.6em', '1.8em'],
    })};
  }

  p {
    font-size: 1em;
    font-family: var(--firstFontFamily);
    letter-spacing: -0.01em;
  }

  a {
  }
`;

export default branding;
