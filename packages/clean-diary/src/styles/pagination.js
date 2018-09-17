import { css } from 'emotion';

const pagination = css`
  padding: 40px 0;
  font-family: var(--secondFontFamily);
  display: flex;
  justify-content: center;

  ul {
    display: inline-flex;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    border-top: 1px solid var(--brandColor);
    border-bottom: 1px solid var(--brandColor);
    border-right: 1px solid #ddd;

    &:last-child,
    &:first-child {
      border: 1px solid var(--brandColor);
    }

    &:first-child {
      border-radius: var(--radius) 0 0 var(--radius);
      border-right: 1px solid #ddd;

      &.no-onestep {
        border-right: 2px dotted var(--brandColor);
      }
    }

    &:last-child {
      border-radius: 0 var(--radius) var(--radius) 0;
      border-left: 1px solid #ddd;

      &.no-onestep {
        border-left: 2px dotted var(--brandColor);
      }
    }

    &:nth-last-child(2) {
      border-right: none;
    }
  }

  svg {
    width: 20px;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    height: 44px;
    min-width: 40px;

    &.active {
      color: white;
      font-weight: 700;
      background: var(--accentColor);
    }
  }
`;

export default pagination;
