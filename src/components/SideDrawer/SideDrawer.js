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
        <li><a href="/">New Products</a></li>
        <li><a href="/">Sale Items - Limited Time!</a></li>
        <li><a href="/">Clearance Bin</a></li>
        <li><a href="/">Machines</a></li>
        <li><a href="/">Furniture</a></li>
        <li><a href="/">Quilting Robotics</a></li>
        <li><a href="/">Embroidery Software</a></li>
        <li><a href="/">Thread</a></li>
        <li><a href="/">Presser Feet</a></li>
        <li><a href="/">Embroidery Hoops</a></li>
        <li><a href="/">Trolleys, Totes, &amp; Cases</a></li>
        <li><a href="/">Bobbins &amp; Bobbin Cases</a></li>
        <li><a href="/">Needles</a></li>
        <li><a href="/">Foot Controls &amp; Cords</a></li>
        <li><a href="/">Other Categories</a></li>
        <li><a href="/">Shop By Brand</a></li>
      </ul>
    </nav>
  );
};

export default sideDrawer;