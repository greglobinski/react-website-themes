import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [1024];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const footer = css`
  background: var(--footerBgColor);
  font-family: var(--secondFontFamily);
  display: flex;
  flex-direction: column;
  font-size: 0.9em;

  ${mq({
    padding: ['40px 40px 90px', '40px 40px'],
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
    margin: 2px 10px;
    position: relative;
  }

  .copyright {
    font-size: 0.9em;
    color: var(--lightTextColor);
    text-align: center;
    margin: 10px 0 30px;
  }

  .credits {
    font-size: 0.8em;
    color: var(--superLightTextColor);
    margin: 20px 0 0;
    text-align: center;

    & a {
      text-decoration: none;
      color: var(--lightTextColor);
    }
  }
`;

export default footer;
