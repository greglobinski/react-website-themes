import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [1024];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const heroStyle = css`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10%;
  text-align: center;

  ${mq({
    minHeight: ['calc(100vh - 300px)', 'calc(100vh - 220px)'],
  })};

  h1 {
    line-height: 1;
    text-align: center;
    font-size: 2.2em;
    margin-bottom: 0.5em;
  }

  img {
    max-width: 100%;
    margin: 20px 0;
  }

  a {
    align-items: center;
    background: #999;
    border-radius: 3px;
    color: #fff;
    display: flex;
    font-size: 1em;
    height: 2.4em;
    line-height: 1;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0 2em;
    margin: 30px 0;
  }
`;

export default heroStyle;
