import 'typeface-pt-serif';
import 'typeface-open-sans';
import { injectGlobal } from 'emotion';

const variables = injectGlobal`
  :root {

    /* base colors */
    --darkColor: #333;
    --brightColor: #FFF;
    --accentColor: #FFA500;
    --colorA: #605B71;
    --colorB: #524D60;
    --colorC: #464252;
    --monthColor: #5F8C40;
    --categoryColor: #3E8A8E;
    --tagColor: #815A9A;

    /* elements' colors */
    --bodyBgColor: var(--brightColor);

    --sidebarBgColor: var(--colorA);
    --sidebarLineColor: var(--colorB);
    --sidebarTextColor: var(--brightColor);
    --sidebarActiveLinkBgColor: var(--colorC);
    --sidebarLinkHoverBgColor: var(--colorB);
    --sidebarBarBgColor: var(--colorB);
    --sidebarSwitchBgColor: var(--colorC);

    --headingColor: --colorB;

    /* space */
    --spaceXS: 2px;
    --spaceS: 4px;
    --spaceM: 8px;
    --spaceL: 14px;
    --spaceXL: 20px;
    --spaceXXL: 30px;

    --textMaxWidth: 640px;

    --barHeight: 60px;
    --desktopSidebarWidth: 40%;
    --mobileSidebarWidth: calc(100% - var(--barHeight));

    --transitionTime: .5s;

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

    --scrollBarThumb: rgba(0,0,0, .2);
    --scrollBarTrack: rgba(0,0,0, .1);
    --scrollBarWidth: 8px;
  }
`;

export default variables;
