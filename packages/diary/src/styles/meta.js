import { css } from 'emotion';

const meta = css`
  margin: 0.5em 0 2em;
  font-size: 0.9em;
  color: var(--lightTextColor);
  display: flex;

  [class$='-blog'] & {
    margin-bottom: 1em;
  }

  & span {
    display: flex;
    align-items: center;
    line-height: 1;
    padding-right: 10px;
  }

  & svg {
    margin: 2px 5px 0 0;
    width: 16px;
    height: 16px;
  }
`;

export default meta;
