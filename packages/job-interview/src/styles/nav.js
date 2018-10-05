import { css, keyframes } from 'emotion';

const showTooltip = keyframes`
  100% {
     transform: translateX(-50%) scale(1);
     opacity: .8;
  }
`;

const nav = css`
  display: flex;
  position: fixed;
  bottom: 10px;
  left: 0;
  justify-content: center;
  width: 100%;
  z-index: 100;

  .tooltip {
    background: #666;
    color: #fff;
    padding: 0.8em 1em 0.9em;
    line-height: 1.4;
    width: 240px;
    text-align: center;
    border-radius: 4px;
    font-size: 0.8em;
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%) scale(0);
    animation: ${showTooltip} 0.5s ease 1 forwards;
    opacity: 0;
    transform-origin: 80% 100%;

    &:before {
      content: '';
      position: absolute;
      bottom: -13px;
      left: 50%;
      transform: translateX(57px);
      width: 0;
      height: 0;
      border-left: 14px solid transparent;
      border-right: 14px solid transparent;
      border-top: 14px solid #666;
    }
  }

  @media (any-pointer: coarse) {
    .tooltip {
      &::after {
        content: ' or swipe down';
      }
    }
  }

  @media (any-pointer: fine) {
    .tooltip {
      &::after {
        content: ', scroll down or press the keybord right/down arrow key';
      }
    }
  }

  .indicator {
    padding-top: 14px;

    span {
      width: 6px;
      height: 6px;
      background: none;
      border: 1px solid #aaa;
      display: inline-block;
      margin: 3px;
      border-radius: 50%;
      transition: 0.3s;

      &.active {
        background: var(--accentColor);
        border: 1px solid var(--accentColor);
      }
    }
  }

  .prev,
  .next {
    border: none;
    width: 50px;
    height: 50px;
    background: none;
    position: relative;
    cursor: pointer;
    margin: 0 10px;

    &:focus {
      outline: none;

      svg {
        stroke: var(--accentColor);
      }
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }

    svg {
      stroke: #bbb;
      width: 30px;
      height: 30px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transform-origin: 50% 50%;
    }

    @media (hover: hover) {
      &:hover {
        &::after {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
`;

export default nav;
