import { css } from 'emotion';
import { keyframes } from 'react-emotion';

const entry = keyframes`
  from  {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
`;

const filterSwitcher = css`
  display: flex;
  background: var(--sidebarSwitchBgColor);
  border: none;
  flex-shrink: 0;
  flex-grow: 1;
  width: var(--barHeight);
  cursor: pointer;
  justify-content: center;
  align-items: center;
  transition: var(--transitionTime) ease;

  & svg {
    stroke: white;
    animation: ${entry} var(--transitionTime) ease 1;
    animation-fill-mode: forwards;
  }
`;

export default filterSwitcher;
