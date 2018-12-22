import React, { Component } from 'react';

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import MyImage from './components/LazyLoadImage/LazyLoadImage';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div style={{height: '100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{marginTop: '64px'}}>
          <p>This is a page content.</p>
          <img
            className="lazy img-responsive"
            alt="SewingMachinesPlus.com"
            title="SewingMachinesPlus.com"
            src="//cdn.sewingmachinesplus.com/AE/images/logo.png"
          />
          <img
            className="lazy img-responsive"
            alt="SewingMachinesPlus.com"
            title="SewingMachinesPlus.com"
            src="https://cdn.sewingmachinesplus.com/media/events/2018-cybermonday/cyber-homepage-banner.jpg"
          />
          <img
            className="lazy img-responsive"
            alt="SewingMachinesPlus.com"
            title="SewingMachinesPlus.com"
            src="https://cdn.sewingmachinesplus.com/media/hero-banner/newsliders/holiday-rotational-banner.jpg"
          />
        </main>
      </div>
    );
  }
}

export default App;
