import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Navbar from '../containers/Navbar';

class Home extends Component {

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
        <div className="main-app">
          <div id="home-navbar"><Navbar history={this.props.history}/></div>
          <div className="home-window">This is home!</div>
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
