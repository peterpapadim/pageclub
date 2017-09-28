import React, { Component } from 'react';
import Navbar from '../containers/Navbar';

class Library extends Component {
  render(){
    return(
      <div className="main-app">
        <div id="home-navbar"><Navbar history={this.props.history.history}/></div>
        <div className="home-window">This is your library!</div>
     </div>
    )
  }
}

export default Library;
