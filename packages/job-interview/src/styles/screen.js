import { css, keyframes } from 'emotion';

const screen = props => css`
  display: flex;
  flex-direction: column;
  width: 100vh;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-origin: center calc(50% - 75px);
  transition: transform 0.5s ease;

  &.superSized {
    transform: scale(${props.superSizeScale});
    transition: transform 1.2s ease;
  }

  &.exposed {
    .mask svg {
      fill: var(--exposedBackground);
    }
    &.last .mask {
      background: var(--exposedBackground);
    }
    .text {
      background: var(--exposedBackground);
    }
  }

  &.last .mask {
    background: var(--background);
    transition: 1s;
  }

  .mask {
    height: 50%;
    overflow: hidden;
    position: relative;

    svg,
    img {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%) scale(0.9);
      transform-origin: center bottom;
    }

    svg {
      fill: var(--background);
      transition: 1s;
    }

    img {
      bottom: 5px;
      border-radius: 50%;
      overflow: hidden;
    }

    &::after {
      content: '';
      width: 150px;
      height: 150px;
      position: absolute;
      bottom: 5px;
      border-radius: 50%;
      left: 50%;
      box-shadow: inset 0 0 3px #ddd;
      transform: translateX(-50%) scale(0.9);
      transform-origin: center bottom;
    }
  }

  .text {
    height: 50%;
    background: var(--background);
    transition: 1s;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;

    h2 {
      text-align: center;
      line-height: 1.05;
      font-size: 2em;
      margin-top: 0.5em;
      letter-spacing: -0.06em;
    }

    p {
    }
  }
`;

export default screen;
