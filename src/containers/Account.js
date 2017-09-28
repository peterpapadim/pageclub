import React, { Component } from 'react';
import Navbar from '../containers/Navbar';

class Account extends Component {
  render(){
    return(
      <div className="main-app">
        <div id="home-navbar"><Navbar history={this.props.history.history}/></div>
        <div className="home-window">User Account Page!</div>
     </div>
    )
  }
}

export default Account;
