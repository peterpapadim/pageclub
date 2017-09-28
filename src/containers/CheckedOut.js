import React, { Component } from 'react';
import Navbar from '../containers/Navbar';

class CheckedOut extends Component {
  render(){
    return(
      <div className="main-app">
        <div id="home-navbar"><Navbar history={this.props.history.history}/></div>
        <div className="home-window">This is your checked out list!</div>
     </div>
    )
  }
}

export default CheckedOut;
