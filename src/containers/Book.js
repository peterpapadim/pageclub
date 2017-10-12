import React, { Component } from 'react';
import Navbar from '../containers/Navbar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchByIsbn } from '../actions/selectedActions';

class Book extends Component {

  componentWillMount(){
    this.props.fetchByIsbn(this.props.history.match.params.term)
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.selectedBook){
      let viewer = new window.google.books.DefaultViewer(document.getElementById('book-container'));
      viewer.load(`ISBN:${nextProps.selectedBook.items[0].volumeInfo.industryIdentifiers[0].identifier}`)
    }
  }

  render(){
    return(
      <div className="container-fluid">
          <div className="row" >
            <div id="navbar" className="col-12">
              <Navbar history={this.props.history.history}/>
            </div>
          </div>
          <div id="page-window" className="row">
            <div id="book-container" className="col-4">
              Book Details
              {!this.props.selectedBook ? <h2>Loading Sample</h2> : null}
            </div>
          </div>
     </div>
    )
  }
}

function mapStateToProps(state){
  return {selectedBook: state.selectedBook}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchByIsbn }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Book);
