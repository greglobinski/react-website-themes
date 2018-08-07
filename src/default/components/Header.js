import React from 'react';
import PropTypes from 'prop-types';

import themed from '../../utils/themed';
import Branding from './Branding';
import MainMenu from './MainMenu';
import branding from '../styles/branding';
import mainMenu from '../styles/mainMenu';

const BrandingThemed = themed({ themeStyle: branding })(Branding);
const MainMenuThemed = themed({ themeStyle: mainMenu })(MainMenu);

const Header = props => {
  const { title, subTitle, menu, themeStyle } = props;

  return (
    <header className={`${themeStyle}`}>
      <BrandingThemed title={title} subTitle={subTitle} />
      {menu && <MainMenuThemed items={menu} />}
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  menu: PropTypes.array,
  themeStyle: PropTypes.string,
};

export default Header;
