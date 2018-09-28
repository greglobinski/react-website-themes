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

  .top {
    height: 50%;
    display: flex;
    flex-direction: column;
  }

  .bottom {
    height: 50%;
    background: ${bg};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .fill {
    flex-basis: 50%;
    flex-grow: 1;
    background: ${bg};
  }

  .porthole {
    height: 150px;
    display: flex;

    .fill {
      flex-shrink: 1;
    }
  }

  .hole {
    background: transparent;
    width: 150px;
    flex-grow: 0;
    flex-shrink: 0;
  }
`;

export default screen;
