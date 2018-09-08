import { css } from 'emotion';

const bodytext = css`
  margin-bottom: 50px;
  min-height: 40vh;
  font-family: var(--secondFontFamily);

  & .gatsby-resp-image-wrapper {
    margin: 2em 0;
  }

  p {
    line-height: 1.7;
    margin: 0 0 1.5em;
    font-size: 1.1em;
  }

  .gatsby-resp-image-wrapper {
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 4px 2px rgba(0, 0, 0, 0.2);
  }

  ul {
    margin: 0 0 1.5em;
    list-style-position: inside;
  }

  li {
    margin: 0.8em 0;
    font-size: 1.1em;
    line-height: 1.3;
    padding-left: 5px;
  }

  h2,
  h3 {
    line-height: 1.2;
    margin: 1.6em 0 0.9em;
    font-family: var(--firstFontFamily);
  }

  h2 {
    font-size: 2em;
  }

  h3 {
    font-size: 1.6em;
  }

  pre {
    margin: 0 0 1.5em;
  }

  blockquote {
    font-family: var(--firstFontFamily);
    font-size: 1.1em;
    font-style: italic;
    text-align: left;
    position: relative;
    margin: 50px 30px;
    color: var(--brandColor);

    small {
      text-align: right;
      display: block;
      font-size: 0.6em;
      font-style: normal;
      margin: 0.5em 0;
      font-family: var(--secondFontFamily);
    }

    p {
      color: var(--brandColor);
      line-height: 1.6;
    }

    &:before,
    &:after {
      content: open-quote;
      color: #ddd;
      padding-right: 0.1em;
      position: absolute;
      top: -25px;
      left: -50px;
      transform: translateY(0.1em);
      font-size: 4em;
    }

    &:after {
      content: close-quote;
      top: auto;
      bottom: -45px;
      left: auto;
      right: -45px;
    }
  }
`;

export default bodytext;
