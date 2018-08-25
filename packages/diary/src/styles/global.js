import { injectGlobal } from 'emotion';

const global = injectGlobal`
  html {
    box-sizing: border-box;
    font-family: var(--firstFontFamily);
    font-size: 16px;
    color: #666;
  }

  *,
  *:after,
  *:before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  p {
    color: var(--textColor);
  }

  h1 {
    font-size: 2.4em;
  }

  h2 {
    font-size: 1.8em;
  }

  ul {
    list-style-position: inside;
  }

  a {
    color: var(--linkColor);
    transition: .3s;
  }

  @media (hover: hover)  {
    a:hover {
      color: var(--hoverLinkColor);
    }
  }

  *::-webkit-scrollbar {
    width: var(--scrollBarWidth);
  }
  *::-webkit-scrollbar-track {
    background: var(--scrollBarTrack);
  }
  *::-webkit-scrollbar-thumb {
    background-color: var(--scrollBarThumb);
  }

`;

export default global;
