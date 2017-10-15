import React, { Component } from 'react';
import Navbar from '../containers/Navbar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Loader } from 'semantic-ui-react';
import { setSelectedBook, clearSelectedBook} from '../actions/selectedActions';
import { fetchSearchResults } from '../actions/searchActions';

class Search extends Component {

  handleResultClick = (book) => {
    this.props.setSelectedBook(book)
    this.props.history.history.push(`/books/${book.id}`)
  }

  displayResults = () => {
    return this.props.searchResults.items.map((book) => {
      if(book.volumeInfo.imageLinks){
        let imgURL = book.volumeInfo.imageLinks.thumbnail.replace("&edge=curl", "")
        return <img key={book.id} className="search-results" src={imgURL} onClick={() => this.handleResultClick(book)}/>
      }
      else{
        return <img key={book.id} className="search-results" src="" onClick={() => this.handleResultClick(book)}/>
      }
    })
  }

  componentDidMount(){
    this.props.fetchSearchResults(this.props.history.match.params.term)
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
          <div className="row page-window">
            <div id="search-container" className="col-12">
              {this.props.searchResults.length === 0 ?
                <Loader active inline='centered' size="large"/> :
                      this.props.searchResults.items ? this.displayResults() : <h2 className="no-search-results"> :( </h2>
              }
            </div>
          </div>
     </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    fetchSearchResults,
    setSelectedBook,
    clearSelectedBook
  }, dispatch
)}

function mapStateToProps(state){
  return {
    searchResults: state.searchResults,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
