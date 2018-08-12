import { css } from 'emotion';

import facepaint from 'facepaint';

const breakpoints = [1024];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const branding = css`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  flex-grow: 0;
  justify-content: center;

  ${mq({
    alignItems: ['center', 'flex-start'],
    margin: ['10px 0 20px', '0'],
  })};

  h1 {
    font-size: 1em;
    margin-bottom: 3px;
    font-weight: 400;
  }

  p {
    font-size: 0.7em;
    color: var(--superLightTextColor);
    letter-spacing: 0.1em;
    font-weight: 300;
  }
`;

export default branding;
