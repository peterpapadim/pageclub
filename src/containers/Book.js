import { Loader } from 'semantic-ui-react'
import React, { Component } from 'react';
import Navbar from '../containers/Navbar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchById, clearSelectedBook } from '../actions/selectedActions';
import BookAdapter from '../adapters/BookAdapter';

class Book extends Component {

  componentWillMount(){
    this.props.fetchById(this.props.history.match.params.term)
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.selectedBook){
      let viewer = new window.google.books.DefaultViewer(document.getElementById('book-sample-container'));
      viewer.load(`${nextProps.selectedBook.id}`)
    }
  }

  componentWillUnmount(){
    this.props.clearSelectedBook()
  }

  showLoader = () => {
    return <Loader active inline='centered' size='large'>Loading Sample</Loader>
  }

  handleBackClick = (event) => {
    event.preventDefault()
    window.history.back();
  }

  handleAddToLibrary = () => {
    BookAdapter.create(this.props.selectedBook)
  }

  book = () => {
    return this.props.selectedBook.volumeInfo
  }



  render(){
    return(
      <div className="container-fluid">
          <div className="row" >
            <div id="navbar" className="col-12">
              <Navbar history={this.props.history.history}/>
            </div>
          </div>
          {
          this.props.selectedBook && this.props.selectedBook.totalItems === 0 ? <h2 className="no-search-results"> :( </h2> :
          <div id="book-page" className="row page-window">
            <div id="book-details-container" className="col col-lg-8">
              <div className="row">
                <div id="back-and-cover" className="col col-lg-5">
                  <a id="back-to-results" href="search-results" onClick={this.handleBackClick}>Back to results</a><br/>
                  {
                    this.props.selectedBook ?
                    this.props.selectedBook.volumeInfo.imageLinks ?
                    <div id="cover-and-button">
                      <img id="book-cover" src={this.props.selectedBook.volumeInfo.imageLinks.thumbnail.replace("&edge=curl", "")} /><br />
                      <button id="add-to-library-button" className="btn btn-success" onClick={this.handleAddToLibrary}>Add To Library</button>
                    </div> :
                    <div id="cover-and-button">
                      <img id="book-cover" src="" /><br />
                      <button id="add-to-library-button" className="btn btn-success" onClick={this.handleAddToLibrary}>Add To Library</button>
                    </div> :
                    null
                  }
                </div>
                <div id="basic-book-info" className="col col-lg-7">
                  {
                    this.props.selectedBook ?
                      <div id="basic-info">
                        <h2>{this.props.selectedBook.volumeInfo.title}</h2>
                        <p>
                            Author(s):  {this.book().authors ? this.book().authors.join(", ") : "N/A" }<br/>
                            Category:  {this.book().categories ? this.book().categories.join(", ") : "N/A"}<br/>
                            Publisher:  {this.book().publisher ? this.book().publisher : "N/A"}<br/>
                            Published Date:  {this.book().publishedDate ? this.book().publishedDate : "N/A"}<br/>
                            Page Count:  {this.book().pageCount ? this.book().pageCount : "N/A"}
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
                        {this.props.selectedBook.volumeInfo.description}
                      </div> : null
                  }
                </div>
              </div>
            </div>
            <div id="book-sample-container" className="col col-lg-4">
              {this.showLoader()}
            </div>
          </div>
        }
     </div>
    )
  }
}

function mapStateToProps(state){
  return {selectedBook: state.selectedBook}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchById, clearSelectedBook }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Book);
