import PropTypes from 'prop-types';
import React from 'react';
import { cx } from 'emotion';

import style from '../styles/social';

const Social = props => {
  const { themeStyle = style, customStyle = '', links } = props;

  return (
    <div className={cx(themeStyle, customStyle)}>
      {links.map(link => {
        const { url, icon: Icon } = link;
        return (
          <a href={url} key={url}>
            <Icon />
          </a>
        );
      })}
    </div>
  );
};

Social.propTypes = {
  links: PropTypes.array.isRequired,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default Social;
