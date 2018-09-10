import 'typeface-pt-serif';
import 'typeface-open-sans';
import { injectGlobal } from 'emotion';

const variables = injectGlobal`
  :root {
    --sidebarWidth: 40%;
    --sidebarHeight: 50px;
    --sidebarTextColor: #f9f9f9;
    --sidebarBgColor: #900;
    --sidebarHeaderBgColor: #800;

    --spaceXS: 2px;
    --spaceS: 4px;
    --spaceM: 8px;
    --spaceL: 14px;
    --spaceXL: 20px;


    --firstFontFamily: "Open Sans", sans-serif;
    --secondFontFamily: "Open Sans", sans-serif;


    --brandColor: #639300;
    --accentColor: #F06000;

    --textColor: #555;
    --lightTextColor: #888;
    --superLightTextColor: #aaa;

    --footerBgColor: #f9f9f9;

    --lineColor: #ddd;



    --radius: 2px;

    --linkColor:  var(--brandColor);
    --hoverLinkColor:  #9ED200;

    --scrollBarThumb: #eaeaea;
    --scrollBarTrack: #f9f9f9;
    --scrollBarWidth: 8px;
  }
`;

export default variables;
