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
    --colorD: #F6F6F6;
    --colorE: #EEEEEE;
    --colorF: #DDDDDD;
    --colorG: #847d9c;
    --monthColor: #5F8C40;
    --categoryColor: #3E8A8E;
    --tagColor: #815A9A;

    /* elements' colors */
    --bodyBgColor: var(--brightColor);
    --linkColor:  var(--colorG);
    --hoverLinkColor:  var(--accentColor);
    --textColor: #555;
    --lightTextColor: #888;
    --superLightTextColor: #aaa;

    --sidebarBgColor: var(--colorA);
    --sidebarLineColor: var(--colorG);
    --sidebarTextColor: var(--brightColor);
    --sidebarActiveLinkBgColor: var(--colorC);
    --sidebarLinkHoverBgColor: var(--colorB);
    --sidebarBarBgColor: var(--colorB);
    --sidebarSwitchBgColor: var(--colorC);

    --headingColor: var(--colorA);
    --quoteColor: var(--colorA);
    --nextPrevBgColor: var(--colorD);
    --commentsBgColor: var(--colorE);
    --footerBgColor: var(--colorF);

    /* spaces */
    --spaceXS: 2px;
    --spaceS: 4px;
    --spaceM: 8px;
    --spaceL: 14px;
    --spaceXL: 20px;
    --spaceXXL: 30px;

    --textMaxWidth: 640px;

    --barHeight: 60px;
    --desktopSidebarWidth: 40%;
    --mobileSidebarWidth: 100%;

    /* fonts */
    --firstFontFamily: "Open Sans", sans-serif;
    --secondFontFamily: "PT Serif", serif;

    /* other */
    --transitionTime: 0.5s;
    --radius: 2px;

    --scrollBarThumb: rgba(0,0,0, .2);
    --scrollBarTrack: rgba(0,0,0, .1);
    --scrollBarWidth: 8px;
  }
`;

export default variables;
