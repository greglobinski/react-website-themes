import { css } from 'emotion';

const sidebar = css`
  background: var(--sidebarBgColor);
  bottom: 0;
  color: var(--sidebarTextColor);
  font-family: var(--secondFontFamily);
  left: 0;
  position: fixed;
  top: 0;
  width: var(--sidebarWidth);

  & a {
    color: var(--sidebarTextColor);
    display: block;
    text-decoration: none;
  }

  header {
    background: var(--sidebarHeaderBgColor);
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    width: var(--sidebarWidth);
    height: var(--sidebarHeight);

    .actions {
      button {
        background: #600;
        border: none;
        width: var(--sidebarHeight);
        height: var(--sidebarHeight);
        margin-left: 1px;
        cursor: pointer;

        svg {
          stroke: white;
        }
      }
    }
  }

  nav {
    position: absolute;
    top: var(--sidebarHeight);
    bottom: 0;
    left: 0;
    width: 100%;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;

    & ul {
      list-style: none;
      font-size: 1.1em;
      line-height: 1.3;
      padding: var(--spaceXL);
    }

    & li {
      margin: var(--spaceS) 0;

      &:first-child {
        margin-top: 0;
      }

      & a {
        padding: 10px 15px;
        border-radius: 4px;

        &:hover {
          background: #700;
          transform: scale(1.03);
        }
      }

      & small {
        align-items: center;
        display: flex;
        font-size: 0.7em;
        opacity: 0.9;
        margin: var(--spaceM) 0 var(--spaceS);
      }

      & svg {
        width: 14px;
        height: 14px;
        margin-right: var(--spaceS);
      }
    }
  }
`;

export default sidebar;
