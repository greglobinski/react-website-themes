import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [1024];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const menu = css`
  align-items: center;
  background: #fff;
  border-radius: 3px;
  flex-grow: 1;
  display: flex;
  z-index: 1;

  font-family: var(--secondFontFamily);
  margin: 10px;

  ${mq({
    border: ['1px solid var(--lineColor)', 'none'],
    position: ['fixed', 'relative'],
    bottom: [0, 'auto'],
    left: [0, 'auto'],
    right: [0, 'auto'],
  })};

  & ul {
    list-style: none;
    display: flex;
    height: 44px;
    justify-content: center;
    flex-grow: 1;

      ${mq({
        marginTop: ['0', '10px'],
      })};
  }

  & li {
    padding: 0 5px;
    line-height: 1;

    & a {
      display: flex;
      height: 100%;
      justify-content: center;
      align-items: center;
      margin: 0 5px;
      color: var(--lightTextColor);
      position: relative;

      @media (any-hover: hover) {
        &:hover {
          color: var(--hoverLinkColor);
        }
      }}
      }
    }

    svg {
      margin: 0 3px 0 0;

      ${mq({
        height: ['20px', '30px', '40px'],
        stroke: ['var(--brandColor)', 'var(--lightTextColor)'],
      })};
    }

    .toTop, .calendar {
      align-items: center;
      background: #f9f9f9;
      border: none;
      cursor: pointer;
      display: flex;
      flex-basis: 44px;
      flex-grow: 0;
      height: 44px;
      justify-content: center;
      width: 44px;
      height: 44px;

      svg {
        height: 24px;
        margin: 0;
        stroke: var(--accentColor);
        width: 24px;
      }

      ${mq({
        border: ['none', '1px solid var(--lineColor)'],
        borderLeft: ['1px solid var(--lineColor)'],
        borderRadius: [0, '3px'],
        position: ['relative', 'fixed'],
        right: ['auto', '30px'],
      })};

    }

    .toTop {
      ${mq({
        bottom: ['auto', '30px'],
      })};
    }

    .calendar {
      ${mq({
        top: ['auto', '30px'],
      })};
    }
  }
`;

export default menu;
