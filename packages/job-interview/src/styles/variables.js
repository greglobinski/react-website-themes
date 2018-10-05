import 'typeface-open-sans';
import { injectGlobal } from 'emotion';

const variables = injectGlobal`
  :root {

    --accentColor: #c00;
    --backgroundColor: #fff;
    --lastBackgroundColor: #333;
    --transitionBackgroundColor: #ddd;

    --textColor: #555;
    --brightTextColor: #aaa;
    --fontFamily: "Open Sans", Arial, sans-serif;

    --linkColor: #c00;
    --hoverLinkColor: #a00;
    --brightLinkColor: #ddd;
  }
`;

export default variables;
