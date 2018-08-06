import React from 'react';
import PropTypes from 'prop-types';

const Bodytext = props => {
  const { html, children, themeStyle } = props;

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
  themeStyle: PropTypes.string
};

export default Bodytext;
