import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [1024];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const comments = css`
  border-top: 1px dashed var(--brightColor);
  background: var(--commentsBgColor);
  min-height: 140px;

  ${mq({
    padding: ['var(--spaceXL)', 'var(--spaceXL) var(--spaceXXL)'],
  })};

  .demand {
    width: 100%;
    margin: var(--spaceXL) auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: 0;
    font-size: 1.2em;
    cursor: pointer;
    color: var(--textColor);
    border-radius: var(--radius);
    transition: all var(--transitionTime);
    line-height: 1.2;

    svg {
      width: 40px;
      height: 40px;
      margin: var(--spaceL);
      stroke: var(--linkColor);
      transition: all var(--transitionTime);
      flex-shrink: 0;
      flex-grow: 0;
    }

    @media (hover: hover) {
      &:hover {
        svg {
          stroke: var(--accentColor);
        }
      }
    }
  }
`;

export default comments;
