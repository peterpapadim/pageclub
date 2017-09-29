import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logOutUser } from '../actions/sessionActions';

class Navbar extends Component {

  constructor(){
    super();
    this.state = {
      input: ''
    }
  }


  onLogoutClick = () => {
    this.props.logOutUser(this.props.history)
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value })
  }

  onSearchSubmit = (event) => {
    event.preventDefault()
    if(this.state.input.length > 0){
      this.props.history.push(`/search-results/${this.state.input}`)
    }
  }

  render(){
    if(Object.keys(this.props.user).length === 0 && (!sessionStorage.user)){
      return(
        <div>Logging in</div>
      )
    }

    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          Pageclub
        </Link>
        <button className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/library">
                My Library
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/checked-out">
                Checked Out
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/friends">
                Friends
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/inbox">
                Inbox(1)
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    to="/profile"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false">
                {
                  Object.keys(this.props.user).length > 0 ?
                  this.props.user.firstName :
                  JSON.parse(sessionStorage.user).firstName
                }
              </Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item"
                      id="dropdown1-tab"
                      to="/account"
                      role="tab"
                      data-toggle="tab"
                      aria-controls="dropdown1"
                      onClick={() => this.props.history.push("/account")}>
                Account
              </Link>
              <Link className="dropdown-item"
                    id="dropdown2-tab"
                    to="/logout"
                    role="tab"
                    data-toggle="tab"
                    aria-controls="dropdown2"
                    onClick={this.onLogoutClick}>
                Logout
              </Link>
              </div>
            </li>
          </ul>
          <div className="nav-search">
          <form className="form-inline my-2 my-lg-0"
                onSubmit={this.onSearchSubmit} >
            <input className="form-control mr-sm-2"
                   type="text"
                   placeholder="Book Title or User Email..."
                   aria-label="Search"
                   value={this.state.input}
                   onChange={this.onInputChange} />
            <button className="btn btn-outline-info my-2 my-sm-0"
                    type="submit">
              Search
            </button>
          </form>
        </div>
        </div>
      </nav>
    )
  }
}

function mapStateToProps(state){
  return { user: state.user }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ logOutUser }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
