import 'typeface-open-sans';
import { injectGlobal } from 'emotion';

const variables = injectGlobal`
  :root {

    --background: #eee;
    --exposedBackground: #fff;

    --textColor: #555;
    --lightTextColor: #888;
    --superLightTextColor: #aaa;
    --fontFamily: "Open Sans", sans-serif;

    --linkColor: #a00;
    --hoverLinkColor: #d00;

    --scrollBarThumb: #eaeaea;
    --scrollBarTrack: #f9f9f9;
    --scrollBarWidth: 10px;
  }
`;

export default variables;
