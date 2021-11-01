import React, { useState } from 'react';
import hamburgerIcon from '../../images/icon-hamburger.svg';

import './index.scss';

const Nav:React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="flex justify-between w-full items-center px-8 py-4 md:px-4">
      <div>
        <div className="lg:px-8 md:px-6 lg:text-xl text-lg font-extrabold text-white">sunnyside</div>
      </div>
      <div>
        <button className="sa-nav__item sa-nav__more" type="button" onClick={() => setShowMenu(!showMenu)}>
          <img alt="more" src={hamburgerIcon} />
        </button>
        <div className={`sa-nav__menu ${showMenu ? '' : 'sa-nav__hidden'}`}>
          <div className="sa-nav__item">About</div>
          <div className="sa-nav__item">Services</div>
          <div className="sa-nav__item">Project</div>
          <div className="sa-nav__item" style={{ paddingTop: '8px', paddingBottom: '8px' }}>
            <button className="sa-nav__menu__btn" type="button">
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
