import { Loader } from 'semantic-ui-react'
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
      let viewer = new window.google.books.DefaultViewer(document.getElementById('book-sample-container'));
      viewer.load(`ISBN:${nextProps.selectedBook.items[0].volumeInfo.industryIdentifiers[0].identifier}`)
    }
  }

  showLoader = () => {
    return <Loader active inline='centered' size='large'>Loading Sample</Loader>
  }

  handleBackClick = (event) => {
    event.preventDefault()
    window.history.back();
  }

//return to this point of undoing!

  render(){
    console.log(this.props.selectedBook)
    return(
      <div className="container-fluid">
          <div className="row" >
            <div id="navbar" className="col-12">
              <Navbar history={this.props.history.history}/>
            </div>
          </div>
          <div id="book-page" className="row page-window">
            <div id="book-details-container" className="col col-lg-8">
              <div className="row">
                <div id="back-and-cover" className="col col-lg-5">
                  <a id="back-to-results" href="search-results" onClick={this.handleBackClick}>Back to results</a><br/>
                  {
                    this.props.selectedBook ?
                    <div id="cover-and-button">
                      <img id="book-cover" src={this.props.selectedBook.items[0].volumeInfo.imageLinks.thumbnail.replace("&edge=curl", "")} /><br />
                      <button id="add-to-library-button" className="btn btn-success">Add To Library</button>
                    </div> :
                    null
                  }
                </div>
                <div id="basic-book-info" className="col col-lg-7">
                  {
                    this.props.selectedBook ?
                      <div id="basic-info">
                        <h2>{this.props.selectedBook.items[0].volumeInfo.title}</h2>
                        <p>
                            Author(s):  {this.props.selectedBook.items[0].volumeInfo.authors.join(", ")}<br/>
                            Category:  {this.props.selectedBook.items[0].volumeInfo.categories.join(", ")}<br/>
                            Publisher:  {this.props.selectedBook.items[0].volumeInfo.publisher}<br/>
                            Published Date:  {this.props.selectedBook.items[0].volumeInfo.publishedDate}<br/>
                            Page Count:  {this.props.selectedBook.items[0].volumeInfo.pageCount}
                        </p>
                      </div> : null
                  }
                </div>
              </div>
              <div id="details-book-info" className="row">
                <div className="col">
                  {
                    this.props.selectedBook ?
                      <div id="details-info">
                        {this.props.selectedBook.items[0].volumeInfo.description}
                      </div> : null
                  }
                </div>
              </div>
            </div>
            <div id="book-sample-container" className="col col-lg-4">
              {this.showLoader()}
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
