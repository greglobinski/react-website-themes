import React from 'react';
import PropTypes from 'prop-types';

import style from '../styles/bodytext';

const Bodytext = props => {
  const { html, children, themeStyle = style } = props;

  return (
    <React.Fragment>
      {html ? (
        <div
          className={`${themeStyle}`}
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
};

export default Bodytext;
