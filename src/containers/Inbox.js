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
          <div id="page-window" className="row">
            <div id="inbox-container" className="col-12">
              Inbox
            </div>
          </div>
     </div>
    )
  }
}

export default Library;
