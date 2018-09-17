import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';

import style from '../styles/toTop';

const ToTop = props => {
  function onClick(e) {
    if (
      document.body.scrollTop !== 0 ||
      document.documentElement.scrollTop !== 0
    ) {
      window.scrollBy(0, -150);
      requestAnimationFrame(onClick);
    }
  }

  const {
    themeStyle = '',
    customStyle = style,
    icons: { arrow: ArrowIcon },
    sideOnMobileExposed,
  } = props;

  return (
    <button
      className={cx(themeStyle, customStyle)}
      onClick={onClick}
      style={{
        transform: sideOnMobileExposed ? 'translateX(100%)' : 'translate(0)',
      }}
    >
      <span className="wrapper">
        <ArrowIcon />
      </span>
    </button>
  );
};

ToTop.propTypes = {
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
  icons: PropTypes.object.isRequired,
  sideOnMobileExposed: PropTypes.bool.isRequired,
};

export default ToTop;
