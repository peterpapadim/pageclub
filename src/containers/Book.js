import { Loader } from 'semantic-ui-react'
import React, { Component } from 'react';
import Navbar from '../containers/Navbar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchById, clearSelectedBook } from '../actions/selectedActions';
import { fetchLibrary, clearLibrary } from '../actions/libraryActions';
import BookAdapter from '../adapters/BookAdapter';

class Book extends Component {


  componentWillMount(){
    let bookId = this.props.history.match.params.id
    this.props.fetchById(bookId)
    this.props.fetchLibrary(JSON.parse(sessionStorage.user).id)
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.selectedBook){
      let viewer = new window.google.books.DefaultViewer(document.getElementById('book-sample-container'));
      viewer.load(`${nextProps.selectedBook.id}`)
    }
  }

  componentWillUnmount(){
    this.props.clearSelectedBook()
    this.props.clearLibrary()
  }

  showLoader = () => {
    return <Loader active inline='centered' size='large'>Loading Sample</Loader>
  }

  showButtonLoader = () => {
    return <div><br /><Loader active inline='centered' size='small' /></div>
  }

  handleBackClick = (event) => {
    event.preventDefault()
    window.history.back();
  }

  handleAddToLibrary = () => {
    BookAdapter.create(this.props.selectedBook)
    .then(resp => this.props.fetchLibrary(JSON.parse(sessionStorage.user).id))
  }

  handleDeleteFromLibrary = () => {
    BookAdapter.destroy(this.props.selectedBook)
    .then(resp => this.props.fetchLibrary(JSON.parse(sessionStorage.user).id))
  }

  checkLibrary = () => {
    if(this.props.library){
      for(let i = 0; i < this.props.library.length; i++){
        if(this.props.library[i].book_info.id === this.props.selectedBook.id){
          return <button id="add-to-library-button"
                         className="btn btn-danger"
                         onClick={this.handleDeleteFromLibrary}>
                         Remove From Library
                 </button>
        }
      }
    }
    return <button id="add-to-library-button"
                   className="btn btn-success"
                   onClick={this.handleAddToLibrary}>
                   Add To Library
           </button>
  }

  book = () => {
    return this.props.selectedBook.volumeInfo
  }



  render(){
    if(this.props.library){console.log(this.props.library)}
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
                  <a id="back-to-results" href="search-results" onClick={this.handleBackClick}>Back</a><br/>
                  {
                    this.props.selectedBook ?
                    this.props.selectedBook.volumeInfo.imageLinks ?
                    <div id="cover-and-button">
                      <img id="book-cover" src={this.props.selectedBook.volumeInfo.imageLinks.thumbnail.replace("&edge=curl", "")} /><br />
                      {this.props.library ? this.checkLibrary() : this.showButtonLoader()}
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
  return {
    selectedBook: state.selectedBook,
    library: state.library
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    fetchById,
    clearSelectedBook,
    fetchLibrary,
    clearLibrary
  }, dispatch
)}

export default connect(mapStateToProps, mapDispatchToProps)(Book);
