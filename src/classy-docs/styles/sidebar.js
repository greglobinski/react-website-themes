import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [1024, 1280];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const sidebar = css`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  background: white;
  border-right: 1px dotted #ddd;
  overflow: auto;
  transition: 0.3s;
  padding-bottom: 20px;

  ${mq({
    transform: ['translate(-280px, 0)', 'translate(0, 0)', 'translate(0, 0)'],
    width: ['280px', '300px', '320px'],
  })};

  & h2 {
    font-size: 0.8em;
    letter-spacing: 0.2em;
    color: var(--superLightTextColor);
    padding: 25px 30px;
    border-bottom: 1px dotted #ddd;
    margin-bottom: 15px;
  }

  & h3 {
    font-size: 0.7em;
    letter-spacing: 0.2em;
    padding: 10px 30px 0;
    text-transform: uppercase;
    font-weight: 300;
    color: var(--lightTextColor);
    display: flex;
    align-items: center;

    & svg {
      width: 15px;
      margin: 0 5px 0 -5px;
      stroke: var(--superLightGray);
    }
  }

  & a {
    text-decoration: none;
  }

  & > ul {
    font-size: 0.9em;
    list-style: none;
    padding: 10px 0 15px;

    & > li {
      background: white;

      & > a {
        text-decoration: none;
        color: #666;
        padding: 6px 29px;
        display: block;
        transition: 0.5s;
        position: relative;
        line-height: 1.35;

        &:before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 13px;
          width: 1px;
          transform: translateX(-14px);
          background: var(--secondActiveColor);
          transition: 0.3s;
        }

        @media (hover: hover) {
          &:hover {
            &:before {
              transform: translateX(0);
              width: 5px;
            }
          }
        }
      }

      & > ul {
        display: none;
        list-style: none;
        margin-left: 17px;
        font-size: 0.9em;

        & > li {
          padding: 4px 20px 6px;
          border-left: 1px dotted var(--firstActiveColor);

          & > a {
            color: #999;
          }

          @media (hover: hover) {
            &:hover {
              border-left: 1px solid var(--secondActiveColor);
            }
          }
        }
      }

      &.active {
        & > a {
          &:before {
            background: var(--firstActiveColor);
            transform: translateX(0);
            width: 5px;
          }
        }

        & > ul {
          display: block;
        }
      }
    }
  }
`;

export default sidebar;
