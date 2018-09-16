import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [1024];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const toTop = css`
  position: fixed;
  background: var(--sidebarBarBgColor);
  border: 0;
  z-index: 1;
  transition: all var(--transitionTime);
  cursor: pointer;

  ${mq({
    width: ['var(--barHeight)', '40px'],
    height: ['var(--barHeight)', '40px'],
    borderRadius: [0, 'var(--radius)'],
    bottom: [0, 'var(--spaceXL)'],
    right: [0, 'var(--spaceXL)'],
  })};

  .wrapper {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  svg {
    stroke: var(--brightColor);
  }
`;

export default toTop;
