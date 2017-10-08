import React, { Component } from 'react';
import Navbar from '../containers/Navbar';
import { connect } from 'react-redux';
import { Loader } from 'semantic-ui-react';

class Search extends Component {

  displayResults = () => {
    return this.props.searchResults.items.map((book) => {
      return <li key={book.id}>{book.volumeInfo.title}</li>
    })
  }

  render(){
    console.log(this.props.searchResults)
    return(
      <div className="container-fluid">
          <div className="row" >
            <div id="navbar" className="col-12">
              <Navbar history={this.props.history.history}/>
            </div>
          </div>
          <div id="page-window" className="row">
            <div id="search-container" className="col-12">
              {this.props.searchResults.length === 0 ?
                <Loader active inline='centered' size="large"/> : <ul>{this.displayResults()}</ul>
              }
            </div>
          </div>
     </div>
    )
  }
}

function mapStateToProps(state){
  return { searchResults: state.searchResults }
}

export default connect(mapStateToProps)(Search);
