import { css } from 'emotion';

const bodytextStyle = css`
  margin-bottom: 50px;
  min-height: 40vh;

  p {
    line-height: 1.5;
    margin: 0 0 1.5em;
    font-size: 1.1em;
  }

  ul {
    margin: 0 0 1.5em;
    list-style: none;
  }

  li {
    margin: 0.8em 0;
    position: relative;
    padding-left: 25px;
    line-height: 1.4;

    &::before {
      content: '';
      position: absolute;
      display: block;
      left: 5px;
      top: 0.5em;
      width: 4px;
      height: 4px;
      background: #900;
    }
  }

  pre {
    margin: 0 0 1.5em;
  }
`;

export default bodytextStyle;
