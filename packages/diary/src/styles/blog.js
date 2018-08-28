import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [768, 1024];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const blog = css`
  ul {
    list-style: none;
  }

  li {
    border-bottom: 1px solid var(--lineColor);
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

  article {
    padding: 60px 0;

    header {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 1em;

      svg {
        stroke: var(--accentColor);
      }
    }

    &.new {
      .date time {
        &:after {
          content: 'new';
          position: absolute;
          top: -29px;
          left: calc(50% + 25px);
          background: var(--specialColor);
          color: white;
          font-weight: 700;
          padding: 3px 8px;
          text-transform: uppercase;
          font-family: var(--secondFontFamily);
          font-size: 0.7em;
          border-radius: 3px;
          font-style: normal;
        }
        &:before {
          content: '';
          position: absolute;
          width: 15px;
          height: 15px;
          top: -19px;
          left: calc(50% + 30px);
          transform: rotate(45deg) skewY(40deg);
          background: var(--specialColor);
        }
      }
    }

    .date {
      display: flex;
      font-style: italic;
      flex-direction: column;
      font-size: 1.2em;
      margin: 0.3em 0 0.5em;

      time {
        margin-bottom: 0.2em;
        color: var(--accentColor);
        position: relative;
      }

      strong {
        font-weight: 700;
      }

      small {
        color: var(--superLightTextColor);
        font-weight: 500;
        font-style: normal;
        font-size: 0.8em;
        font-family: var(--secondFontFamily);
      }
    }

    h3 {
      font-size: 2em;
      font-weight: 700;
      line-height: 1.1;
      letter-spacing: -0.01em;
      margin-bottom: 0.5em;
    }

    p {
      line-height: 1.6;
      color: var(--lightTextColor);
      font-family: var(--secondFontFamily);
    }

    a {
      text-decoration: none;
      color: var(--accentColor);
      border: 1px solid var(--accentColor);
      margin: 2em 0 0.2em;
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
            stroke: var(--accentColor);
            transition: 0.3s;
          }
        }

        &.arrow {
          border: none;
          background: #f9f9f9;
          padding: 0;
          width: 40px;
          flex-shrink: 0;
          flex-grow: 0;
          justify-content: center;
          border-left: 1px solid var(--lineColor);
          border-radius: 0 var(--radius) var(--radius) 0;

          svg {
            width: 2em;
            stroke: var(--accentColor);
            transform: translateX(-1px);
          }
        }
      }

      @media (hover: hover) {
        &:hover span {
          color: var(--accentColor);

          &.time {
            transform: translate(20px);

            svg {
              fill: var(--accentColor);
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
  }

  blockquote {
    font-family: var(--firstFontFamily);
    font-size: 1.6em;
    font-style: italic;
    text-align: left;
    line-height: 1.2;
    position: relative;

    ${mq({
      padding: ['60px 10px 50px', '60px 20px 50px', '60px 40px 50px'],
    })};

    small {
      text-align: right;
      display: block;
      font-size: 0.6em;
      font-style: normal;
      margin: 0.5em 0;
      font-family: var(--secondFontFamily);
    }

    & p:before,
    & p:after {
      color: var(--accentColor);
      display: inline-block;
      padding-right: 0.1em;
      position: relative;
      transform: translateY(0.1em);
    }

    & p:first-child:before {
      content: open-quote;
      padding-right: 0.2em;
    }

    & p:nth-last-child(2):after {
      content: close-quote;
    }
  }
`;

export default blog;
