import { css } from 'emotion';

const bodytext = css`
  margin-bottom: 50px;
  min-height: 40vh;
  font-family: var(--firstFontFamily);

  p,
  ul,
  h1,
  h2,
  h3 {
    max-width: var(--textMaxWidth);
    margin: var(--spaceXL) auto;
    padding: 0 var(--spaceXL);
  }

  & figure {
    margin: calc(var(--spaceXL) * 2) auto;
    max-width: 1023px;
    position: relative;
  }

  & figcaption {
    position: absolute;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    padding: 8px 14px;
    max-width: 100%;
    color: white;
  }

  & pre[class*='language-'] {
    margin: calc(var(--spaceXL) * 2) auto;
    max-width: 1023px;
    border-radius: 0;
  }

  p {
    line-height: 1.7;
    font-size: 1.1em;
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
    margin: 1.6em auto 0.9em;
    letter-spacing: -0.02em;
  }

  h2 {
    font-size: 2em;
    letter-spacing: -0.03em;
  }

  h3 {
    font-size: 1.6em;
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
      font-family: var(--firstFontFamily);
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
