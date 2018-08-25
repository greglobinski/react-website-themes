import { css } from 'emotion';

const blog = css`
  ul {
    list-style: none;
  }

  li {
    border-bottom: 1px solid var(--lineColor);
    margin-bottom: 4em;
    padding-bottom: 4em;
    text-align: center;
    position: relative;

    &:after {
      background: white;
      border: 1px solid var(--lineColor);
      border-radius: 50%;
      bottom: 0;
      content: '';
      height: 14px;
      left: 50%;
      position: absolute;
      transform: translate(-50%, 50%);
      width: 14px;
    }
  }

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1em;
  }

  .date {
    display: flex;
    font-style: italic;
    flex-direction: column;
    font-size: 1.2em;
    margin: 0.3em 0 0.5em;

    time {
      margin-bottom: 0.2em;
    }

    strong {
      font-weight: 700;
    }

    small {
      color: var(--superLightTextColor);
      font-weight: 500;
      font-style: normal;
      font-size: 0.6em;
      letter-spacing: 0.1em;
      font-family: var(--secondFontFamily);
    }
  }

  h3 {
    font-size: 2em;
    font-weight: 400;
    line-height: 1.1;
    letter-spacing: -0.01em;
    margin-bottom: 0.5em;
  }

  p {
    line-height: 1.4;
    color: var(--lightTextColor);
    font-family: var(--secondFontFamily);
  }

  a {
    text-decoration: none;
    color: var(--textColor);
    border: 1px solid var(--lineColor);
    margin: 2em 0 1em;
    display: inline-flex;
    font-family: var(--secondFontFamily);
    border-radius: var(--radius);
    overflow: hidden;

    span {
      height: 40px;
      display: flex;
      align-items: center;
      padding: 0 1em;
      white-space: nowrap;
      flex-basis: auto;
      transition: 0.3s;

      &.time {
        svg {
          width: 1em;
          margin-right: 0.3em;
          stroke: #aaa;
          transition: 0.3s;
        }
      }

      &.arrow {
        border: none;
        background: #f9f9f9;
        color: #aaa;
        padding: 0;
        width: 40px;
        flex-shrink: 0;
        flex-grow: 0;
        justify-content: center;
        border-left: 1px solid var(--lineColor);
        border-radius: 0 var(--radius) var(--radius) 0;

        svg {
          width: 2em;
          stroke: #aaa;
        }
      }
    }

    @media (hover: hover) {
      &:hover span {
        &.time {
          transform: translate(20px);

          svg {
            fill: red;
            stroke: white;
            width: 1.4em;
          }
        }
        &.arrow {
          transform: translate(40px);
        }
      }
    }
  }
`;

export default blog;
