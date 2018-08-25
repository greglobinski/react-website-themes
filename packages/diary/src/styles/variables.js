import 'typeface-pt-serif';
import 'typeface-open-sans';
import { injectGlobal } from 'emotion';

const variables = injectGlobal`
  :root {
    --lineColor: #eee;
    --radius: 4px;


    --textColor: #555;
    --lightTextColor: #888;
    --superLightTextColor: #aaa;
    --firstFontFamily: "PT Serif", serif;
    --secondFontFamily: "Open Sans", sans-serif;

    --linkColor: #a00;
    --hoverLinkColor: #d00;

    --scrollBarThumb: #eaeaea;
    --scrollBarTrack: #f9f9f9;
    --scrollBarWidth: 10px;
  }
`;

export default variables;
