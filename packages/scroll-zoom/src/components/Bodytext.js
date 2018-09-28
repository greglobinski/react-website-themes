import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';

import style from '../styles/bodytext';

const Bodytext = props => {
  const { html, children, themeStyle = style, customStyle = '' } = props;

  return (
    <React.Fragment>
      {html ? (
        <div
          className={cx(themeStyle, customStyle)}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      ) : (
        <div className={`${themeStyle}`}>{children}</div>
      )}
    </React.Fragment>
  );
};

Bodytext.propTypes = {
  html: PropTypes.string,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default Bodytext;
