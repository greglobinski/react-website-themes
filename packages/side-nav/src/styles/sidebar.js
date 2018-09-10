import { css } from 'emotion';

const sidebar = css`
  background: var(--sidebarBgColor);
  color: var(--sidebarTextColor);
  font-family: var(--secondFontFamily);
  left: 0;
  padding-top: var(--sidebarHeight);
  position: fixed;
  top: 0;
  width: var(--sidebarWidth);
  bottom: 0;

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
    z-index: 2;

    .switches {
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

  .appliedFilters {
    padding: 20px;
    background: black;
  }

  nav {
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    bottom: 0;
    left: 0;
    width: var(--sidebarWidth);
    transition: 0.3s;
    position: fixed;
    top: var(--sidebarHeight);

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
