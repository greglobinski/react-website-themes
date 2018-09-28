import { css } from 'emotion';

const screen = bg => css`
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

  .mask {
    height: calc(50% + 1px);
    overflow: hidden;
    position: relative;
    transform: translateY(1px);
    z-index: 1;

    svg {
      position: absolute;
      bottom: 0;
      left: 50%;
      fill: ${bg};
      transform: translateX(-50%);
    }

    &::after {
      content: '';
      width: 150px;
      height: 150px;
      position: absolute;
      bottom: 5px;
      border-radius: 50%;
      left: 50%;
      box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
      transform: translateX(-50%);
    }
  }

  .text {
    height: 50%;
    background: ${bg};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;

    h2 {
      text-align: center;
      line-height: 1.05;
      letter-spacing: -0.06em;
    }
  }
`;

export default screen;

/*
    &::after {
      content: '';
      border: 1px solid black;
      opacity: 0.1;
      width: 150px;
      height: 150px;
      position: absolute;
      bottom: 5px;
      border-radius: 50%;
      left: 50%;
      filter: blur(5px);
      transform: translateX(-50%);
    }
*/
