import React, { Component } from 'react';
import Navbar from '../containers/Navbar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchLibrary, clearLibrary } from '../actions/libraryActions';
import { fetchUserInfo } from '../actions/userActions';
import { setSelectedBook } from '../actions/selectedActions';
import { Loader } from 'semantic-ui-react';

class Library extends Component {

  componentDidMount(){
    if(!!this.props.user.id){
      this.props.fetchLibrary(this.props.user.id)
    }else{
      this.props.fetchUserInfo()
      .then(() => this.props.fetchLibrary(this.props.user.id))
    }
  }

  componentWillUnmount(){
    this.props.clearLibrary()
  }

  handleResultClick = (book) => {
    this.props.setSelectedBook(book.book_info)
    this.props.history.history.push(`/books/${book.book_info.id}`)
  }

  displayResults = () => {
    return this.props.library.map((book) => {
      if(book.book_info.volumeInfo.imageLinks){
        let imgURL = book.book_info.volumeInfo.imageLinks.thumbnail.replace("&edge=curl", "")
        return <div className="library-list">
                 <div>
                   <img key={book.book_info.id}
                      className="search-results"
                      src={imgURL}
                      onClick={() => this.handleResultClick(book)}
                      alt={book.title} />
                  </div>
                  <div>
                    {
                      book.checked_out ?
                      <h4 id="checkout-unavailable">Checked Out</h4> :
                      <h4 id="checkout-available">Available</h4>
                    }
                  </div>
               </div>

      }
      else{
        return <img key={book.book_info.id}
                    className="search-results"
                    src="" onClick={() => this.handleResultClick(book)}/>
      }
    })
  }

  render(){
    console.log(this.props.library)
    return(
      <div className="container-fluid">
          <div className="row" >
            <div id="navbar" className="col-12">
              <Navbar history={this.props.history.history}/>
            </div>
          </div>
          <div className="row page-window">
            <div id="library-container" className="col-12">
              <h2>Library</h2>
              {this.props.library ? this.displayResults() : <Loader active inline='centered' size="large"/>}
            </div>
          </div>
     </div>
   )
  }
}

function mapStateToProps(state){
  return {
    library: state.library,
    user: state.user
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchLibrary, fetchUserInfo, setSelectedBook, clearLibrary }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Library);
