import PropTypes from 'prop-types';
import React from 'react';
import { cx } from 'emotion';

import style from '../styles/nav';

class Nav extends React.Component {
  state = {
    showTooltip: false,
  };

  componentDidMount = () => {
    setTimeout(this.showTooltip, 2000);
  };

  showTooltip = () => {
    if (this.props.exposedScreenId === 1) {
      this.setState({
        showTooltip: true,
      });

      setTimeout(this.hideTooltip, 10000);
    }
  };

  componentDidUpdate = prevProps => {
    if (
      prevProps.exposedScreenId !== this.props.exposedScreenId &&
      this.props.exposedScreenId !== 1
    ) {
      this.hideTooltip();
    }
  };

  hideTooltip = () => {
    if (this.state.showTooltip) {
      this.setState({
        showTooltip: false,
      });
    }
  };

  render() {
    const {
      numberOfScreens,
      exposedScreenId,
      themeStyle = style,
      customStyle = '',
      icons: { next: NextIcon, prev: PrevIcon },
    } = this.props;
    const items = Array(numberOfScreens)
      .fill(0)
      .map((item, idx) => idx + 1);

    return (
      <nav className={cx(themeStyle, customStyle)}>
        {this.state.showTooltip && (
          <div className="tooltip">To move on click the arrow button</div>
        )}

        <button
          className="prev"
          onClick={this.props.prevScreen}
          disabled={exposedScreenId === 1 ? true : false}
        >
          <PrevIcon />
        </button>
        <div className="indicator">
          {items.map(item => (
            <span
              className={`${item === exposedScreenId ? 'active' : ''}`}
              key={item}
            />
          ))}
        </div>
        <button
          className="next"
          onClick={this.props.nextScreen}
          disabled={exposedScreenId === numberOfScreens ? true : false}
        >
          <NextIcon />
        </button>
      </nav>
    );
  }
}

Nav.propTypes = {
  numberOfScreens: PropTypes.number.isRequired,
  exposedScreenId: PropTypes.number.isRequired,
  nextScreen: PropTypes.func.isRequired,
  prevScreen: PropTypes.func.isRequired,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
  icons: PropTypes.object.isRequired,
};

export default Nav;
