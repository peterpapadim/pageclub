import React, { Component } from 'react';
import Navbar from '../containers/Navbar';

class CheckedOut extends Component {
  render(){
    return(
      <div className="container-fluid">
          <div className="row" >
            <div id="navbar" className="col-12">
              <Navbar history={this.props.history.history}/>
            </div>
          </div>
          <div className="row page-window">
            <div id="checked-out-container" className="col-12">
              Checked out
            </div>
          </div>
     </div>
    )
  }
}

export default CheckedOut;
