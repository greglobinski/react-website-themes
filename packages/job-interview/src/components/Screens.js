import PropTypes from 'prop-types';
import React from 'react';
import { cx } from 'emotion';
import debounce from 'lodash.debounce';

import style from '../styles/screens';
import Screen from './Screen';

class Screens extends React.Component {
  state = {
    numberOfScreens: this.props.screens.length,
    activeScreen: 1,
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth,
    documentHeight: document.body.offsetHeight,
    maxScale: 1,
  };

  screens = {};
  lastTouchY = null;
  lastTouchSwipe = null;

  componentDidMount() {
    const { windowHeight, windowWidth } = this.state;

    window.scrollTo(0, 0);

    this.setState({
      maxScale:
        (Math.sqrt(Math.pow(windowWidth, 2) + Math.pow(windowHeight, 2)) /
          150) *
        1.3,
    });

    window.addEventListener('wheel', debounce(this.mouseWheelHandler, 250));
    window.addEventListener('touchstart', this.touchstartHandler);
    window.addEventListener('touchmove', this.touchmoveHandler);
    window.addEventListener('touchend', this.touchendHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', debounce(this.mouseWheelHandler, 250));
    window.removeEventListener('touchstart', this.touchstartHandler);
    window.removeEventListener('touchmove', this.touchmoveHandler);
    window.removeEventListener('touchend', this.touchendHandler);
  }

  mouseWheelHandler = e => {
    const delta = e.deltaY;
    if (delta > 0) {
      this.nextScreen();
    } else if (delta < 0) {
      this.prevScreen();
    }
  };

  touchmoveHandler = e => {
    var currentTouchY = e.touches[0].clientY;
    if (currentTouchY > this.lastTouchY) {
      this.lastTouchSwipe = 'down';
    } else if (currentTouchY < this.lastTouchY) {
      this.lastTouchSwipe = 'up';
    }
    this.lastTouchY = currentTouchY;
  };

  touchendHandler = e => {
    if (this.lastTouchSwipe === 'up') {
      this.nextScreen();
    } else if (this.lastTouchSwipe === 'down') {
      this.prevScreen();
    }

    this.lastTouchY = null;
    this.lastTouchSwipe = null;
  };

  nextScreen = val => {
    if (this.state.activeScreen < this.state.numberOfScreens) {
      this.setState({ activeScreen: this.state.activeScreen + 1 });
    }
  };

  prevScreen = val => {
    if (this.state.activeScreen > 1) {
      this.setState({ activeScreen: this.state.activeScreen - 1 });
    }
  };

  render() {
    const { screens, themeStyle = style, customStyle = '' } = this.props;
    const { activeScreen, maxScale } = this.state;

    return (
      <main className={cx(themeStyle, customStyle)} ref={this.container}>
        <div className="info">activeScreen: {this.state.activeScreen}</div>
        {screens.map((item, idx) => {
          const { id, headline, text, background, avatar } = item;
          this.screens[id] = React.createRef();
          console.log(idx, id);
          return (
            <Screen
              key={id}
              id={id}
              background={background}
              ref={this.screens[id]}
              activeScreen={activeScreen}
              superSizeScale={maxScale}
              avatar={avatar}
              last={idx === 0 ? true : false}
            >
              <h2>{headline}</h2>
              <p>{text}</p>
            </Screen>
          );
        })}
      </main>
    );
  }
}

Screens.propTypes = {
  screens: PropTypes.array.isRequired,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default Screens;
