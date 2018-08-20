import { css } from 'emotion';

const blog = css`
  ul {
    list-style: none;
  }

  li {
    padding: 0 0 2.5em;
  }

  h3 {
    font-size: 1.6em;
    margin-bottom: 0.5em;
    line-height: 1.2;
    letter-spacing: -0.02em;
  }

  a {
    text-decoration: none;
    color: var(--textColor);

    &:hover {
      color: var(--hoverLinkColor);
    }
  }

  p {
    line-height: 1.4;
  }
`;

export default blog;
