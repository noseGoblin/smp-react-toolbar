import React, { Component } from 'react';

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './components/Toolbar/Toolbar.css';

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
          <div className="nav-spacer-pics"></div>
          <LazyLoadImage
            className="lazy img-responsive"
            alt="SewingMachinesPlus.com"
            title="SewingMachinesPlus.com"
            effect="blur"
            src="//cdn.sewingmachinesplus.com/AE/images/logo.png"
          />
          <div className="nav-spacer-pics"></div>
          <LazyLoadImage
            className="lazy img-responsive"
            alt="SewingMachinesPlus.com"
            title="SewingMachinesPlus.com"
            effect="blur"
            src="https://cdn.sewingmachinesplus.com/media/events/2018-cybermonday/cyber-homepage-banner.jpg"
          />
          <div className="nav-spacer-pics"></div>
          <LazyLoadImage
            className="lazy img-responsive"
            alt="SewingMachinesPlus.com"
            title="SewingMachinesPlus.com"
            effect="blur"
            src="https://cdn.sewingmachinesplus.com/media/hero-banner/newsliders/holiday-rotational-banner.jpg"
          />
        </main>
      </div>
    );
  }
}

export default App;
