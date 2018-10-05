import PropTypes from 'prop-types';
import React from 'react';
import { cx } from 'emotion';
import debounce from 'lodash.debounce';

import style from '../styles/screens';

class Screens extends React.Component {
  lastTouchY = null;
  lastTouchSwipe = null;

  state = {
    screens: this.props.screensData.filter(item => item.id <= 2),
    lastScreen: this.props.screensData[this.props.screensData.length - 1],
    numberOfScreens: this.props.screensData.length,
    exposedScreenId: 1,
    superSizeScale: 1,
  };

  componentDidMount() {
    if (typeof window !== 'undefined') {
      this.setWindowBasedValues();

      window.addEventListener(
        'resize',
        debounce(this.setWindowBasedValues, 500)
      );

      window.addEventListener('wheel', debounce(this.mouseWheelHandler, 250));
      window.addEventListener('touchstart', this.touchstartHandler);
      window.addEventListener('touchmove', this.touchmoveHandler);
      window.addEventListener('touchend', this.touchendHandler);
      window.addEventListener('keydown', this.keydownHandler);

      this.turnOffHiddenLinks();
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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.exposedScreenId !== this.state.exposedScreenId) {
      this.turnOffHiddenLinks();
    }
  }

  setWindowBasedValues = () => {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const superSizeScale =
      Math.sqrt(Math.pow(windowWidth, 2) + Math.pow(windowHeight + 250, 2)) /
      130;

    this.setState({
      superSizeScale: superSizeScale,
    });
  };

  turnOffHiddenLinks = () => {
    const hiddenLinks = Array.from(
      document.querySelectorAll(
        `:not(#id-${this.state.exposedScreenId}) .content a`
      )
    );

    const exposedLinks = Array.from(
      document.querySelectorAll(`#id-${this.state.exposedScreenId} .content a`)
    );

    hiddenLinks.forEach(link => (link.tabIndex = -1));
    exposedLinks.forEach(link => (link.tabIndex = 0));
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

    if (currentTouchY < this.lastTouchY) {
      this.lastTouchSwipe = 'next';
    } else if (currentTouchY > this.lastTouchY) {
      this.lastTouchSwipe = 'prev';
    }

    this.lastTouchY = currentTouchY;
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

  getNewScreens = (screensData, newExposedScreenId, action) => {
    return screensData
      .filter(
        item =>
          item.id >= newExposedScreenId - 1 &&
          item.id <= newExposedScreenId + 1 &&
          item.id < screensData.length
      )
      .map(item => {
        if (item.id === newExposedScreenId - 1) {
          item.transitionClass = action === 'next' ? 'maximize' : 'maximized';
        } else if (item.id === newExposedScreenId) {
          item.transitionClass = action === 'next' ? 'expose' : 'minimize';
        } else if (item.id === newExposedScreenId + 1) {
          item.transitionClass = action === 'next' ? 'minimized' : 'minimized';
        }

        return item;
      });
  };

  rebuildScreensFor = val => {
    this.setState((state, props) => {
      let newExposedScreenId;

      if (val === 'next') {
        newExposedScreenId = state.exposedScreenId + 1;
      } else if (val === 'prev') {
        newExposedScreenId = state.exposedScreenId - 1;
      }

      const newScreens = this.getNewScreens(
        props.screensData,
        newExposedScreenId,
        val
      );

      return { screens: newScreens, exposedScreenId: newExposedScreenId };
    });
  };

  nextScreen = () => {
    if (this.state.exposedScreenId < this.state.numberOfScreens) {
      return this.rebuildScreensFor('next');
    }
  };

  prevScreen = () => {
    if (this.state.exposedScreenId > 1) {
      return this.rebuildScreensFor('prev');
    }
  };

  render() {
    const {
      themeStyle = style,
      customStyle = '',
      screenComponent: Screen,
      navComponent: Nav,
      socialComponent: Social,
      navIcons,
      socialLinks,
    } = this.props;

    const {
      screens,
      numberOfScreens,
      exposedScreenId,
      lastScreen,
      superSizeScale,
    } = this.state;

    const reversedScreens = [...screens].reverse();

    return (
      <main className={cx(themeStyle, customStyle)}>
        {/* <div className="info">exposedScreen: {exposedScreenId}</div> */}
        <Nav
          numberOfScreens={numberOfScreens}
          exposedScreenId={exposedScreenId}
          nextScreen={this.nextScreen}
          prevScreen={this.prevScreen}
          icons={navIcons}
        />

        <Screen
          id={lastScreen.id}
          avatar={lastScreen.avatar}
          numberOfScreens={numberOfScreens}
          superSizeScale={superSizeScale}
          exposedScreenId={exposedScreenId}
        >
          <div dangerouslySetInnerHTML={{ __html: lastScreen.html }} />
          <Social links={socialLinks} />
        </Screen>

        {reversedScreens.map((item, idx) => {
          const { id, html, transitionClass } = item;

          return (
            <Screen
              key={id}
              id={id}
              transitionClass={transitionClass}
              superSizeScale={superSizeScale}
              numberOfScreens={numberOfScreens}
              exposedScreenId={exposedScreenId}
            >
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </Screen>
          );
        })}
      </main>
    );
  }
}

Screens.propTypes = {
  screensData: PropTypes.array.isRequired,
  screenComponent: PropTypes.func.isRequired,
  navComponent: PropTypes.func.isRequired,
  socialComponent: PropTypes.func,
  navIcons: PropTypes.object.isRequired,
  socialLinks: PropTypes.array,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default Screens;
