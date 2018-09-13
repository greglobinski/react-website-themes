import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [1024];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const filterWidget = css`
  background: var(--sidebarBgColor);
  width: 100%;
  position: fixed;
  height: calc(100% - var(--barHeight));
  z-index: 1;
  transition: var(--transitionTime);

  ${mq({
    top: [0, 'var(--barHeight)'],
    transform: ['translateY(100%)', 'translateY(-100%)'],
  })};

  &.open {
    ${mq({
      transform: 'translateY(0)',
    })};
  }

  & .title {
    padding: 18px 20px 5px 20px;
    font-weight: 300;
    font-size: 1em;
  }

  & .items {
    padding: 0 14px 15px 14px;
  }

  & button {
    background: transparent;
    border: none;
    color: #eee;
    cursor: pointer;
    font-size: 1em;
    margin: 2px;
    padding: 5px;

    &:hover {
      & span {
        background: white;
        color: black;
      }
    }

    & span {
      padding: 8px 12px;
      display: inline-block;
      line-height: 1;
    }

    & .label {
      border-radius: var(--radius) 0 0 var(--radius);
      padding-left: 14px;
      background: rgba(255, 255, 255, 0.2);
    }

    & .posts {
      border-radius: 0 var(--radius) var(--radius);
      margin-left: 1px;
      font-weight: 700;
      background: rgba(255, 255, 255, 0.15);
    }
  }
`;

export default filterWidget;
