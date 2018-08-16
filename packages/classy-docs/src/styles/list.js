import { css } from 'emotion';

const list = css`
  & h3 {
    font-size: 0.7em;
    letter-spacing: 0.2em;
    padding: 10px 0 0;
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

  ul {
    margin: 0 0 1.5em;
    list-style: none;
  }

  li {
    margin: 0.8em 0;
    line-height: 1.4;
    padding: 0 5px 0 20px;
    position: relative;

    &:before {
      content: '';
      width: 4px;
      height: 4px;
      background: var(--firstActiveColor);
      position: absolute;
      top: 0.45em;
      left: 1px;
    }
  }

  & a {
    text-decoration: none;
    color: #666;
  }
`;

export default list;
