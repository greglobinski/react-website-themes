import { css } from 'emotion';

const filters = css`
  background: #600;
  width: var(--sidebarWidth);
  position: fixed;
  bottom: calc(100vh - var(--sidebarHeight));
  height: calc(100vh - var(--sidebarHeight));
  z-index: 1;
  transition: 0.25s;
  transform: translateY(0);

  & .title {
    padding: 18px 20px 5px 20px;
    font-weight: 300;
    font-size: 1em;
  }

  & .items {
    padding: 0 14px 15px 14px;
  }

  & button {
    background: transparent;
    border: none;
    color: #eee;
    cursor: pointer;
    font-size: 1em;
    margin: 2px;
    padding: 5px;

    &:hover {
      & span {
        background: white;
        color: black;
      }
    }

    & span {
      padding: 8px 12px;
      display: inline-block;
      line-height: 1;
    }

    & .label {
      border-radius: var(--radius) 0 0 var(--radius);
      padding-left: 14px;
      background: rgba(255, 255, 255, 0.2);
    }

    & .posts {
      border-radius: 0 var(--radius) var(--radius);
      margin-left: 1px;
      font-weight: 700;
      background: rgba(255, 255, 255, 0.15);
    }
  }
`;

export default filters;

/*
  position: absolute;
  bottom: calc(100% - var(--sidebarHeight) - 2px);
   */
