import { css } from 'emotion';

const bodytext = css`
  margin-bottom: 50px;
  min-height: 40vh;

  & .gatsby-resp-image-wrapper {
    margin: 2em 0;
  }

  p {
    line-height: 1.6;
    margin: 0 0 1.5em;
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
    margin: 1.5em 0 0.8em;
    letter-spacing: -0.01em;
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
    padding-left: 20px;
    border-left: 5px solid #ddd;
    font-style: italic;
  }
`;

export default bodytext;
