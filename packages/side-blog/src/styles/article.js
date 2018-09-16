import { css } from 'emotion';
import { keyframes } from 'react-emotion';
import facepaint from 'facepaint';

const breakpoints = [1024];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const entry = keyframes`
  from  {
    opacity: 0;
    transform: translateY(30px)
  }

  to {
    opacity: 1
    transform: translateY(0)
  }
`;

const article = css`
  overflow-x: hidden;
  padding: 5% 0 0;
  min-height: 100vh;

  &.entry {
    ${mq({
      animation: ['', `${entry} var(--transitionTime) ease 1`],
      animationFillMode: ['', 'forwards'],
    })};
  }
`;

export default article;
