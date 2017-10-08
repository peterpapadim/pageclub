import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../containers/Navbar';

class Home extends Component {

  // constructor(){
  //   super();
  //   this.state = {
  //     windowWidth: window.innerWidth
  //   }
  // }

  handleResize = () => {
    this.setState({ windowWidth: window.innerWidth })
  }

  componentDidMount(){
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.handleResize)
  }

  loginClick = () => {
    this.props.history.push("/login")
  }

  createAccountClick = () => {
    this.props.history.push("/create-account")
  }

  render(){
    return(
      <div className="home-container">
          {this.props.session === "ERROR" || !this.props.session ?
          <div className="home-login-join">
            <div className="login-join">
              <button id="login" className="btn btn-outline-dark" onClick={this.loginClick}>Login</button>
              <button id="join" className="btn btn-outline-dark" onClick={this.createAccountClick}>Join</button>
            </div>
          </div>
        :
        <div className="container-fluid">
            <div className="row" >
              <div id="navbar" className="col-12">
                <Navbar history={this.props.history}/>
              </div>
            </div>
          {this.props.history.push("/library")}
       </div>
        }
     </div>
    )
  }

}


function mapStateToProps(state){
  return {
    session: state.session
  }
}

export default connect(mapStateToProps)(Home);

// This and state were being used to hide componenets at a specific window width
// {
//   this.state.windowWidth > 991 ?
//     <div id="home-window" className="row">
//       <div id="top-books-container" className="col-2">
//         Top Books
//       </div>
//       <div id="featured-container" className="col-8">
//         Featured
//       </div>
//       <div id="cart-home-container" className="col-2">
//         Cart
//       </div>
//     </div> :
//     <div id="home-window" className="row">
//       <div id="featured-container" className="col-12">
//         Featured
//       </div>
//     </div>
// }
