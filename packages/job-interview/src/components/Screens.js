import PropTypes from 'prop-types';
import React from 'react';
import { cx } from 'emotion';
import debounce from 'lodash.debounce';

import style from '../styles/screens';

class Screens extends React.Component {
  state = {
    numberOfScreens: this.props.screens.length,
    activeScreen: 1,
    windowHeight: 0,
    windowWidth: 0,
    maxScale: 1,
  };

  screens = {};
  lastTouchY = null;
  lastTouchX = null;
  lastTouchSwipe = null;

  componentDidMount() {
    if (typeof window !== 'undefined') {
      this.setInitialStateValues();

      window.addEventListener(
        'resize',
        debounce(this.setInitialStateValues, 500)
      );
      window.addEventListener('wheel', debounce(this.mouseWheelHandler, 250));
      window.addEventListener('touchstart', this.touchstartHandler);
      window.addEventListener('touchmove', this.touchmoveHandler);
      window.addEventListener('touchend', this.touchendHandler);
      window.addEventListener('keydown', this.keydownHandler);
    }
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener(
        'wheel',
        debounce(this.mouseWheelHandler, 250)
      );
      window.removeEventListener('touchstart', this.touchstartHandler);
      window.removeEventListener('touchmove', this.touchmoveHandler);
      window.removeEventListener('touchend', this.touchendHandler);
      window.removeEventListener('keydown ', this.keydownHandler);
    }
  }

  setInitialStateValues = () => {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    this.setState({
      windowHeight: windowHeight,
      windowWidth: windowWidth,
      maxScale:
        (Math.sqrt(Math.pow(windowWidth, 2) + Math.pow(windowHeight, 2)) /
          150) *
        1.5,
    });
  };

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
    var currentTouchX = e.touches[0].clientX;
    if (currentTouchX < this.lastTouchX || currentTouchY < this.lastTouchY) {
      this.lastTouchSwipe = 'next';
    } else if (
      currentTouchX > this.lastTouchX ||
      currentTouchY > this.lastTouchY
    ) {
      this.lastTouchSwipe = 'prev';
    }
    this.lastTouchY = currentTouchY;
    this.lastTouchX = currentTouchX;
  };

  touchendHandler = e => {
    if (this.lastTouchSwipe === 'next') {
      this.nextScreen();
    } else if (this.lastTouchSwipe === 'prev') {
      this.prevScreen();
    }

    this.lastTouchY = null;
    this.lastTouchSwipe = null;
  };

  keydownHandler = e => {
    const keyCode = e.which;
    if (keyCode === 39 || keyCode === 40) {
      this.nextScreen();
    } else if (keyCode === 37 || keyCode === 38) {
      this.prevScreen();
    }
  };

  nextScreen = e => {
    if (this.state.activeScreen < this.state.numberOfScreens) {
      this.setState({ activeScreen: this.state.activeScreen + 1 });
    }
  };

  prevScreen = e => {
    if (this.state.activeScreen > 1) {
      this.setState({ activeScreen: this.state.activeScreen - 1 });
    }
  };

  render() {
    const {
      screens,
      themeStyle = style,
      customStyle = '',
      screenComponent: Screen,
      navComponent: Nav,
      icons,
    } = this.props;
    const { activeScreen, maxScale, numberOfScreens } = this.state;

    return (
      <main className={cx(themeStyle, customStyle)} ref={this.container}>
        {/* <div className="info">activeScreen: {this.state.activeScreen}</div> */}
        {screens.map((item, idx) => {
          const { id, headline, text, background, avatar } = item;
          this.screens[id] = React.createRef();

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
              numberOfScreens={numberOfScreens}
            >
              <h2>{headline}</h2>
              <p>{text}</p>
            </Screen>
          );
        })}

        <Nav
          numberOfScreens={numberOfScreens}
          activeScreen={activeScreen}
          nextScreen={this.nextScreen}
          prevScreen={this.prevScreen}
          icons={icons}
        />
      </main>
    );
  }
}

Screens.propTypes = {
  screens: PropTypes.array.isRequired,
  screenComponent: PropTypes.func.isRequired,
  navComponent: PropTypes.func.isRequired,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
  icons: PropTypes.object.isRequired,
};

export default Screens;
