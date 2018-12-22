import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar__logo"><a href="/">THE LOGO</a></div>
      <div className="nav-spacer"></div>
      <div className="toolbar__navigation-items">
        <ul>
          <li><a href="/">Machines</a></li>
          <li><a href="/">Furniture</a></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;