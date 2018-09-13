import { css } from 'emotion';

const list = css`
  ul {
    list-style: none;

    margin: 40px 0;
  }

  li {
    font-size: 1.5em;
    text-align: center;
    line-height: 1.2;
    margin-bottom: 20px;
  }

  time {
    font-family: var(--firstFontFamily);
    font-size: 0.6em;
    color: var(--brandColor);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 4px;

    & svg {
      width: 14px;
      margin-right: 5px;
      stroke: var(--accentColor);
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
