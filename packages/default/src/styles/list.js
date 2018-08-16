import { css } from 'emotion';

const li = `
  li {
    border-bottom: 1px dotted #ddd;

    &:last-child {
      border-bottom: none;
    }
  }
`;

const listStyle = css`
  ul {
    list-style: none;
    font-size: 1.3em;
  }

  ${li};

  a {
    text-decoration: none;
    padding: 0.6em 5px;
    position: relative;
    display: block;
    color: #666;
  }
`;

export default listStyle;
