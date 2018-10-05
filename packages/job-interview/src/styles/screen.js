import { css, keyframes } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [768, 1024];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const maximize = props => keyframes`
  0% {
     transform: scale(1) translateX(0);
  }
  99% {
     transform: scale(${props.superSizeScale}) translateX(0);
  }
  100% {
     transform: scale(${props.superSizeScale}) translateX(100%);
  }
`;

const minimize = props => keyframes`
  0% {
    transform: scale(${props.superSizeScale}) translateX(100%);
  }
  1% {
    transform: scale(${props.superSizeScale}) translateX(0);
  }
  100% {
    transform: scale(1) translateX(0);
  }
`;

const fillTransition = keyframes`
  0% {
    fill: var(--transitionBackgroundColor);
  }
  100% {
     fill: var(--backgroundColor);
  }
`;

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
  transform-origin: center calc(50% - 115px);
  overflow: hidden;

  .mask {
    fill: var(--backgroundColor);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc((50% + 50px) * -1));
  }

  &::after {
    border-radius: 50%;
    width: 130px;
    height: 130px;
    position: absolute;
    box-shadow: inset 0 0 5px #ddd;
    content: '';
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc((50% + 115px) * -1));
  }

  .avatar {
    border-radius: 50%;
    width: 132px;
    height: 132px;
    overflow: hidden;
    background: var(--backgroundColor);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc((50% + 115px) * -1));

    img {
      width: 100%;
    }
  }

  .content {
    height: calc(50% + 49px);
    transition: 1s;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 30px;
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    color: var(--textColor);

    h1 {
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
      z-index: 1000;

      ${mq({
        maxWidth: ['500px', '600px', '700px'],
      })};
    }

    a {
      color: var(--linkColor);
      text-decoration: none;

      &:hover {
        color: var(--hoverLinkColor);
      }
    }

    .credits {
      margin-top: 20px;
      color: var(--brightTextColor);
      font-size: 0.8em;

      a {
        color: var(--brightLinkColor);
        line-height: 1.5;
      }
    }
  }

  &.maximized {
    transform: scale(${props.superSizeScale});
  }

  &.maximize {
    animation: ${maximize(props)} 1.4s ease 1 forwards;
  }

  &.minimized {
    transform: scale(1);
  }

  &.minimize {
    animation: ${minimize(props)} 0.5s ease 1 forwards;

    .mask {
      animation: ${fillTransition} 1s ease 1 forwards;
    }
  }

  &.expose {
    .mask {
      animation: ${fillTransition} 1s ease 1 forwards;
    }
  }

  &.last {
    .picture {
      background: var(--lastBackgroundColor);
      transition: 1s;
    }
    .mask {
      fill: var(--lastBackgroundColor);
    }
    .content {
      color: white;

      p {
        color: #ddd;
      }
    }
  }
`;

export default screen;
