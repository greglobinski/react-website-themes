import 'typeface-merriweather-sans';
import { injectGlobal } from 'emotion';

const variables = injectGlobal`
  :root {
    --scrollBarThumb: #eaeaea;
    --scrollBarTrack: #f9f9f9;
    --scrollBarWidth: 5px;
  }
`;

export default variables;
