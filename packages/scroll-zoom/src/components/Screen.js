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
        <div className="mask">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="2500px"
            height="2500px"
            viewBox="0 0 2500 2500"
          >
            <path
              stroke="none"
              d="M2500,2500H0V0h2500V2500z M1250,2345c-41.422,0-75,33.579-75,75s33.578,75,75,75
	c41.42,0,75-33.579,75-75S1291.42,2345,1250,2345z"
            />
          </svg>
        </div>
        <div className="text">{children}</div>
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
