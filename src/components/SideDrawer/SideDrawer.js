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
        <a href="/"><li>New Products</li></a>
        <a href="/"><li>Sale Items - Limited Time!</li></a>
        <a href="/"><li>Clearance Bin</li></a>
        <a href="/"><li>Machines</li></a>
        <a href="/"><li>Furniture</li></a>
        <a href="/"><li>Quilting Robotics</li></a>
        <a href="/"><li>Embroidery Software</li></a>
        <a href="/"><li>Thread</li></a>
        <a href="/"><li>Presser Feet</li></a>
        <a href="/"><li>Embroidery Hoops</li></a>
        <a href="/"><li>Trolleys, Totes, &amp; Cases</li></a>
        <a href="/"><li>Bobbins &amp; Bobbin Cases</li></a>
        <a href="/"><li>Needles</li></a>
        <a href="/"><li>Foot Controls &amp; Cords</li></a>
        <a href="/"><li>Other Categories</li></a>
        <a href="/"><li>Shop By Brand</li></a>
      </ul>
    </nav>
  );
};

export default sideDrawer;