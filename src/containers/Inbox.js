import React, { Component } from 'react';
import Navbar from '../containers/Navbar';

class Inbox extends Component {
  render(){
    return(
      <div className="container-fluid">
          <div className="row" >
            <div id="navbar" className="col-12">
              <Navbar history={this.props.history.history}/>
            </div>
          </div>
          <div className="row page-window">
            <div id="inbox-container" className="col-12">
              Inbox
            </div>
          </div>
     </div>
    )
  }
}

export default Inbox;
