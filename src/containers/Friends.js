import React, { Component } from 'react';
import Navbar from '../containers/Navbar';

class Friends extends Component {
  render(){
    return(
      <div className="main-app">
        <div id="home-navbar"><Navbar history={this.props.history.history}/></div>
        <div className="home-window">These are your current friends!</div>
     </div>
    )
  }
}

export default Friends;
