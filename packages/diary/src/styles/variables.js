import 'typeface-pt-serif';
import 'typeface-open-sans';
import { injectGlobal } from 'emotion';

const variables = injectGlobal`
  :root {
    --accentColor: #7EA800;
    --specialColor: #FF9900;

    --textColor: #555;
    --lightTextColor: #888;
    --superLightTextColor: #aaa;

    --lineColor: #eee;

    --firstFontFamily: "PT Serif", serif;
    --secondFontFamily: "Open Sans", sans-serif;

    --radius: 4px;

    --linkColor:  var(--accentColor);
    --hoverLinkColor:  #9ED200;

    --scrollBarThumb: #eaeaea;
    --scrollBarTrack: #f9f9f9;
    --scrollBarWidth: 10px;
  }
`;

export default variables;
