import { css } from 'emotion';

const filtersInfo = css`
  padding: var(--spaceL) var(--spaceL) var(--spaceL);
  border-bottom: 1px dashed var(--sidebarLineColor);
  background: var(--sidebarSwitchBgColor);

  .title {
    color: var(--brightColor);
    padding: 0 var(--spaceM) var(--spaceS);
    font-size: 0.8em;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: var(--colorF);
    margin-top: -2px;
  }

  & li {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .item {
    border: 0;
    background: transparent;
    cursor: pointer;
    margin: 0;
    padding: calc(var(--spaceS) * 1.5);

    @media (hover: hover) {
      &:hover {
        .sign {
          background: rgba(255, 255, 255, 1);
          color: var(--textColor);
        }
      }
    }
  }

  .wrapper {
    display: flex;
    height: 32px;
    border-radius: var(--radius);
  }

  .value,
  .sign {
    color: var(--brightColor);
    display: flex;
    align-items: center;
    transition: all var(--transitionTime);
  }

  .value {
    border-radius: var(--radius) 0 0 var(--radius);
    padding: 0 10px;
    font-size: 1.1em;
    line-height: 1;

    svg {
      width: 15px;
      height: 15px;
      margin: -1px var(--spaceS) 0 0;
    }
  }

  .sign {
    border-radius: 0 var(--radius) var(--radius);
    margin-left: 1px;
    font-weight: 700;
    font-size: 1.3em;
    padding: 0 6px;
    background: rgba(255, 255, 255, 0.1);

    svg {
      stroke: var(--accentColor);
      width: 18px;
      height: 18px;
      stroke-width: 4;
    }
  }
`;

export default filtersInfo;
