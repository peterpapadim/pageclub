import React, { Component } from 'react';
import Navbar from '../containers/Navbar';

class Search extends Component {
  render(){
    return(
      <div className="main-app">
        <div id="home-navbar"><Navbar history={this.props.history.history}/></div>
        <div className="home-window">You searched for {this.props.history.match.params.term}</div>
     </div>
    )
  }
}

export default Search;
