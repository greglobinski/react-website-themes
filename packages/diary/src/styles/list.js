import { css } from 'emotion';

const list = css`
  ul {
    list-style: none;

    margin: 40px 0 60px;
  }

  li {
    font-size: 1.5em;
    text-align: center;
    line-height: 1.2;
    margin-bottom: 20px;
  }

  time {
    font-family: var(--secondFontFamily);
    font-size: 0.6em;
    color: var(--accentColor);
    display: flex;
    justify-content: center;
    align-items: center;

    & svg {
      width: 14px;
      margin-right: 5px;
    }
  }

  a {
    text-decoration: none;
    padding: 0.6em 5px;
    position: relative;
    display: block;
    color: var(--textColor);

    @media (any-hover: hover) {
      &:hover {
        color: var(--hoverLinkColor);
      }
    }
  }
`;

export default list;
