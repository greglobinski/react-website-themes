import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [768, 1024];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const ornament = `
  background: white;
  border: 1px solid var(--lineColor);
  border-radius: 50%;
  content: '';
  height: 14px;
  left: 50%;
  position: absolute;
  width: 14px;
`;

const blog = css`
  ul {
    list-style: none;
    padding: 0 25px;
    margin: 0 auto;
    max-width: 600px;
  }

  li {
    border-top: 1px solid var(--lineColor);
    text-align: center;
    position: relative;

    &:before {
      ${ornament};
      top: 0;
      transform: translate(-50%, -50%);
    }

    &:last-child {
      border-bottom: 1px solid var(--lineColor);

      &:after {
        ${ornament};
        bottom: 0;
        transform: translate(-50%, 50%);
      }
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
          left: calc(50% + 20px);
          background: var(--accentColor);
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
          width: 8px;
          height: 8px;
          left: calc(50% + 17px);
          top: -20px;
          transform: rotate(45deg);
          background: var(--accentColor);
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
        color: var(--brandColor);
        position: relative;
      }

      strong {
        font-weight: 700;
      }

      small {
        color: var(--brandColor);
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
      color: var(--brandColor);
      border: 1px solid var(--brandColor);
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
            stroke: var(--brandColor);
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
          color: var(--brandColor);

          &.time {
            transform: translate(20px);

            svg {
              fill: var(--brandColor);
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
      color: var(--brandColor);
      display: inline-block;
      position: relative;
    }

    & p:first-child:before {
      content: open-quote;
      padding-right: 0.2em;
      transform: translateY(0.1em);
    }

    & p:nth-last-child(2):after {
      content: close-quote;
    }
  }
`;

export default blog;
