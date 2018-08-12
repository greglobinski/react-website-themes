import 'typeface-merriweather-sans';
import { injectGlobal } from 'emotion';

const variables = injectGlobal`
  :root {
    --firstActiveColor: #d00;
    --secondActiveColor: orange;
    --superLightGray: #ccc;

    --textColor: #555;
    --lightTextColor:  #777;
    --superLightTextColor:  #aaa;

    --linkColor: #a00;
    --hoverLinkColor: #d00;

    --scrollBarThumb: #eaeaea;
    --scrollBarTrack: #f9f9f9;
    --scrollBarWidth: 5px;
  }
`;

export default variables;
