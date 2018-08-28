import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [768, 1024];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const menu = css`
  flex-grow: 1;
  display: flex;
  align-items: center;
  z-index: 1;
  background: #fff;
  justify-content: center;
  font-family: var(--secondFontFamily);

  ul {
    list-style: none;
    display: flex;
    height: 44px;
    justify-content: center;
  }

  li {
    padding: 0 5px;
    line-height: 1;

    a {
      display: flex;
      height: 100%;
      justify-content: center;
      align-items: center;
      padding: 0 5px;
      color: var(--lightTextColor);

      @media (any-hover: hover) {
        &:hover {
          color: var(--hoverLinkColor);
        }
      }
    }

    svg {
      margin: 0 3px 0 0;

      ${mq({
        height: ['20px', '30px', '40px'],
      })};
    }
  }
`;

export default menu;
