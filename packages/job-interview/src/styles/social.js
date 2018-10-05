import { css, keyframes } from 'emotion';

const social = css`
  display: flex;
  justify-items: center;
  margin-top: 10px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 0 7px;
    transition: all 0.5s;
  }

  a:hover {
    background: var(--backgroundColor);

    svg {
      stroke: var(--accentColor);
      transform: scale(1.2);
    }
  }

  svg {
    transition: all 0.5s;
    stroke: var(--backgroundColor);
  }
`;

export default social;
