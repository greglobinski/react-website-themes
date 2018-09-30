import { css, keyframes } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [768, 1024];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

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
  transform-origin: center calc(45% - 75px);
  transition: transform 0.5s ease;

  &.superSized {
    transform: scale(${props.superSizeScale});
    transition: transform 1.2s ease;
  }

  &.exposed {
    .mask svg {
      fill: var(--exposedBackground);
    }
    .text {
      background: var(--exposedBackground);
    }
  }

  &.last {
    .mask {
      background: var(--lastBackground);
      transition: 1s;
    }
    .text {
      background: var(--lastBackground);
      color: white;
    }
  }

  .mask {
    height: 45%;
    overflow: hidden;
    position: relative;

    svg,
    .avatar {
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

    .avatar {
      bottom: 5px;
      border-radius: 50%;
      width: 150px;
      height: 150px;
      overflow: hidden;
      background: white;

      img {
        width: 100%;
      }
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
    height: 55%;
    background: var(--background);
    transition: 1s;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 30px;
    text-align: center;

    h2 {
      margin: 0 auto;
      line-height: 1;
      font-size: 2em;
      margin: 0.6em 0 0.4em;
      letter-spacing: -0.06em;

      ${mq({
        fontSize: ['1.8em', '2.2em', '2.8em'],
        maxWidth: ['500px', '600px', '700px'],
      })};
    }

    p {
      font-size: 1.2em;
      max-width: 500px;
      margin: 0 auto;
      margin: 0;
      line-height: 1.5;
    }
  }
`;

export default screen;
