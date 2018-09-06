import 'typeface-pt-serif';
import 'typeface-open-sans';
import { injectGlobal } from 'emotion';

const variables = injectGlobal`
  :root {
    --brandColor: #639300;
    --accentColor: #F06000;

    --textColor: #555;
    --lightTextColor: #888;
    --superLightTextColor: #aaa;

    --footerBgColor: #f9f9f9;

    --lineColor: #ddd;

    --firstFontFamily: "PT Serif", serif;
    --secondFontFamily: "Open Sans", sans-serif;

    --radius: 4px;

    --linkColor:  var(--brandColor);
    --hoverLinkColor:  #9ED200;

    --scrollBarThumb: #eaeaea;
    --scrollBarTrack: #f9f9f9;
    --scrollBarWidth: 10px;
  }
`;

export default variables;
