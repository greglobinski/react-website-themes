import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [1024];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const meta = css`
  max-width: var(--textMaxWidth);
  margin: 0 auto var(--spaceXXL);
  font-size: 0.9em;
  color: var(--headingColor);
  display: flex;
  flex-direction: column;
  font-family: var(--firstFontFamily);
  align-items: flex-start;

  ${mq({
    padding: ['0 var(--spaceXL)', '0 var(--spaceXXL)'],
  })};

  & span {
    padding: var(--spaceXS) 0;
    display: flex;
    align-items: center;
    margin-bottom: var(--spaceS);
  }

  & svg {
    margin: 0 var(--spaceS) 0 0;
    width: 16px;
    height: 16px;
    stroke: var(--accentColor);
  }
`;

export default meta;
