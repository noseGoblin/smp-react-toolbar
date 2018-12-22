import React from 'react';

import './SideDrawer.css';

const sideDrawer = props => {
  // let drawerClasses = ['side-drawer'];
  // if (props.show) {
  //   drawerClasses = ['side-drawer', 'open'];
  // }
  //combining arras for drop-downs

  
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
//    <nav className={drawerClasses.join(' ')}>
   <nav className={drawerClasses}>
      <ul>
        <li><a href="/">Machines</a></li>
        <li><a href="/">Furniture</a></li>
      </ul>
    </nav>
  );
};

export default sideDrawer;