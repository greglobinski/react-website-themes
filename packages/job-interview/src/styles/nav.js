import { css, keyframes } from 'emotion';

const nav = css`
  display: flex;
  position: fixed;
  bottom: 15px;
  left: 0;
  justify-content: center;
  width: 100%;

  .indicator {
    padding-top: 10px;

    span {
      width: 6px;
      height: 6px;
      background: none;
      border: 1px solid #aaa;
      display: inline-block;
      margin: 2px;
      border-radius: 50%;
      transition: 0.3s;

      &.active {
        background: #c00;
        border: 1px solid #c00;
      }
    }
  }

  button {
    border: none;
    width: 44px;
    height: 44px;
    background: none;
    position: relative;
    cursor: pointer;

    &:focus {
      outline: none;

      svg {
        stroke: #c00;
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
