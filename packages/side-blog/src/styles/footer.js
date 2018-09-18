import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [1024];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const footer = css`
  border-top: 1px dashed var(--brightColor);
  background: var(--footerBgColor);
  display: flex;
  flex-direction: column;
  font-size: 0.9em;
  padding: calc(var(--spaceXL) * 2);

  ${mq({
    paddingBottom: ['calc(var(--spaceXL) * 5)', 'calc(var(--spaceXL) * 2)'],
  })};

  .links ul {
    list-style: none;
    color: var(--textColor);
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    line-height: 1.1;
  }

  .links a {
    text-decoration: none;
    color: var(--textColor);
    font-weight: bold;
  }

  .links li {
    text-align: center;
    margin: var(--spaceXS) var(--spaceM);
    position: relative;
    line-height: 1.2;
  }

  .copyright {
    font-size: 0.9em;
    color: var(--lightTextColor);
    text-align: center;
    margin: var(--spaceM) 0;
  }

  .credits {
    font-size: 0.8em;
    color: var(--lightTextColor);
    margin: var(--spaceXL) 0 0;
    text-align: center;

    & a {
      text-decoration: none;
      color: var(--lightTextColor);
    }
  }
`;

export default footer;
