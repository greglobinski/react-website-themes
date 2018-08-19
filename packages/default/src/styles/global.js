import { injectGlobal } from 'emotion';

const global = injectGlobal`
  html {
    box-sizing: border-box;
    font-family: "Open Sans", sans-serif;
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
    color: #444;
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
    color: #666;
    transition: .3s;
  }

  @media (hover: hover)  {
    a:hover {
      color: #900;
    }
  }

  :not(pre) > code[class*='language-'] {
    background: #eee;
    color: #666;
    text-shadow: none;
    padding: 1px 5px;
    border-radius: 2px;
  }


`;

export default global;
