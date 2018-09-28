import PropTypes from 'prop-types';
import React from 'react';
import { cx } from 'emotion';

import style from '../styles/screen';

class Screen extends React.Component {
  screen = React.createRef();

  scaleScreen = (activeScreenId, activeScreenScale, scaleToFull) => {
    if (activeScreenId === this.props.id) {
      this.screen.current.style.transform = `scale(${1 +
        activeScreenScale * scaleToFull})`;
    } else if (activeScreenId < this.props.id) {
      this.screen.current.style.transform = `scale(1)`;
    }
  };

  render() {
    const {
      children,
      customStyle = '',
      background = 'white',
      scale = 1,
    } = this.props;

    let { themeStyle = style } = this.props;

    themeStyle = themeStyle(background);

    return (
      <div
        className={cx(themeStyle, customStyle)}
        style={{ transform: `scale(${scale})` }}
        ref={this.screen}
      >
        <div className="top">
          <div className="fill">&nbsp;</div>
          <div className="porthole">
            <div className="fill">&nbsp;</div>
            <div className="hole">&nbsp;</div>
            <div className="fill">&nbsp;</div>
          </div>
        </div>
        <div className="bottom">{children}</div>
      </div>
    );
  }
}

Screen.propTypes = {
  id: PropTypes.number.isRequired,
  children: PropTypes.node,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
  background: PropTypes.string,
  scale: PropTypes.number,
};

export default Screen;
