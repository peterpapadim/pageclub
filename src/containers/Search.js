import React, { Component } from 'react';
import Navbar from '../containers/Navbar';

class Search extends Component {
  render(){
    return(
      <div className="container-fluid">
          <div className="row" >
            <div id="navbar" className="col-12">
              <Navbar history={this.props.history.history}/>
            </div>
          </div>
          <div id="page-window" className="row">
            <div id="search-container" className="col-12">
              You searched for {this.props.history.match.params.term}
            </div>
          </div>
     </div>
    )
  }
}

export default Search;
