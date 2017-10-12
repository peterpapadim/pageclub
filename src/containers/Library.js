import React, { Component } from 'react';
import Navbar from '../containers/Navbar';

class Library extends Component {
  render(){
    return(
      <div className="container-fluid">
          <div className="row" >
            <div id="navbar" className="col-12">
              <Navbar history={this.props.history.history}/>
            </div>
          </div>
          <div className="row page-window">
            <div id="library-container" className="col-12">
              My Library
            </div>
          </div>
     </div>
    )
  }
}

export default Library;
