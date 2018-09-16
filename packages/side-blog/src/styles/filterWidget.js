import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [1024];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const filterWidget = css`
  background: var(--sidebarBgColor);
  width: 100%;
  position: fixed;
  left: 0;
  height: calc(100% - var(--barHeight));
  z-index: 1;
  transition: var(--transitionTime);
  overflow-y: auto;

  ${mq({
    top: [0, 'var(--barHeight)'],
    transform: ['translateY(100%)', 'translateY(-100%)'],
  })};

  &.open {
    ${mq({
      transform: 'translateY(0)',
    })};
  }

  .title {
    padding: var(--spaceL) var(--spaceXL) var(--spaceM);
    font-weight: 300;

    ${mq({
      fontSize: ['1.1em', '1.4em'],
    })};
  }

  .items {
    padding: 0 var(--spaceL);
  }

  .item {
    border: 0;
    background: transparent;
    cursor: pointer;
    margin: 0;
    padding: calc(var(--spaceS) * 1.5);

    &.applied {
      .label,
      .posts {
        background: rgba(255, 255, 255, 0.8);
        color: var(--textColor);
      }
      .posts {
        padding: 0 6px;
      }
    }

    @media (hover: hover) {
      &:hover {
        .label,
        .posts {
          background: rgba(255, 255, 255, 0.8);
          color: var(--textColor);
        }
      }
    }
  }

  .wrapper {
    display: flex;
    height: 32px;
  }

  .label,
  .posts {
    color: var(--brightColor);
    display: flex;
    align-items: center;
    padding: 0 10px;
    transition: all var(--transitionTime);
  }

  .label {
    border-radius: var(--radius) 0 0 var(--radius);
    background: rgba(255, 255, 255, 0.2);
    font-size: 1.1em;
  }

  .posts {
    border-radius: 0 var(--radius) var(--radius);
    margin-left: 1px;
    font-weight: 700;
    font-size: 1.3em;
    background: rgba(255, 255, 255, 0.1);

    svg {
      stroke: var(--accentColor);
      stroke-width: 4;
    }
  }
`;

export default filterWidget;

/*


   button {
    background: transparent;
    background: red;
    display: flex;
    height: 40px;
       min-height: 100%;
   display: flex;
   align-items: stretch;


    span {
      background: blue;
      display: flex;
      flex:1;
    }
  }


    flex-direction: row;
    border: none;
    color: #eee;
    cursor: pointer;
    font-size: 1em;

    height: 40px;
    align-items: stretch;



/*
    &.applied {
      & span {
        background: white;
        color: black;
      }
    }

    @media (hover: hover) {
      &:hover span {
        background: white;
        color: black;
      }
    }




    */
