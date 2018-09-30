import { injectGlobal } from 'emotion';

const global = injectGlobal`
  html {
    box-sizing: border-box;
    font-family: var(--fontFamily);
    font-size: 16px;
  }

  body {
    overflow-y: hidden;
    -webkit-tap-highlight-color: rgba(0,0,0,.05);
  }

  *,
  *:after,
  *:before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

`;

export default global;
