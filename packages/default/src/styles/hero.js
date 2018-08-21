import { css } from 'emotion';
import facepaint from 'facepaint';
import { keyframes } from 'react-emotion';

const breakpoints = [768, 1024];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const breath = keyframes`
  from {
    transform: scale(1);
  }
  80% {
    transform: scale(1.2);
  }
  to {
    transform: scale(1);
  }
`;

const hero = css`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10%;
  text-align: center;

  ${mq({
    minHeight: [
      'calc(100vh - 300px)',
      'calc(100vh - 280px)',
      'calc(100vh - 220px)',
    ],
  })};

  h1 {
    line-height: 1;
    text-align: center;
    font-size: 2.2em;
    margin-bottom: 0.5em;
    letter-spacing: -0.03em;

    ${mq({
      fontSize: ['2.2em', '2.6em', '3em'],
    })};
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
    animation: ${breath} 6s ease infinite;
  }
`;

export default hero;
