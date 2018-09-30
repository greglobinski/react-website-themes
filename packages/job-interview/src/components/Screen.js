import PropTypes from 'prop-types';
import React from 'react';
import { cx } from 'emotion';

import style from '../styles/screen';

class Screen extends React.Component {
  screen = React.createRef();

  state = {
    superSized: false,
    display: true,
  };

  componentDidUpdate(prevProps, prevState) {
    const { id, activeScreen, numberOfScreens } = this.props;
    if (prevProps.activeScreen !== this.props.activeScreen) {
      if (activeScreen > id && this.state.superSized === false) {
        this.setState({ superSized: true });
      } else if (activeScreen === id && this.state.superSized === true) {
        this.setState({ superSized: false });
      } 

      if (id < numberOfScreens) {
        if (activeScreen - id > 1 || id - activeScreen > 1) {
          this.setState({ display: false });
        } else if (activeScreen - id <= 1 || id - activeScreen >= 1) {
          this.setState({ display: true });
        }
      }
    }
  }

  render() {
    const { id, activeScreen, children, customStyle = '', last } = this.props;

    let { themeStyle = style, avatar } = this.props;

    const { superSized, display } = this.state;

    themeStyle = themeStyle(this.props);

    return (
      <div
        className={`${cx(themeStyle, customStyle)} ${
          superSized ? 'superSized' : ''
        } ${activeScreen === id ? 'exposed' : ''} ${last ? 'last' : ''}`}
        ref={this.screen}
        style={{ display: display ? 'flex' : 'none' }}
      >
        <div className="mask">
          {avatar ? (
            <div className="avatar">
              <img src={avatar} alt="" />
            </div>
          ) : (
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
          )}
        </div>
        <div className="text">{children}</div>
      </div>
    );
  }
}

Screen.propTypes = {
  id: PropTypes.number.isRequired,
  activeScreen: PropTypes.number.isRequired,
  superSizeScale: PropTypes.number.isRequired,
  last: PropTypes.bool.isRequired,
  children: PropTypes.node,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
  background: PropTypes.string,
  avatar: PropTypes.string,
};

export default Screen;
