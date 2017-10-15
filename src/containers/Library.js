import React, { Component } from 'react';
import Navbar from '../containers/Navbar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchLibrary } from '../actions/libraryActions';

class Library extends Component {

  componentDidMount(){
    this.props.fetchLibrary()
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
              My Library
            </div>
          </div>
     </div>
   )
  }
}

function mapStateToProps(state){
  return { library: state.library }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchLibrary }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Library);
