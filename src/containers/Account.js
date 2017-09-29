import React, { Component } from 'react';
import Navbar from '../containers/Navbar';
import DeleteAccountModal from '../components/DeleteAccountModal';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchUserInfo } from '../actions/userActions';
import { logOutUser } from '../actions/sessionActions';
import UserAdapter from '../adapters/UserAdapter';

class Account extends Component {

  constructor(){
    super();
    this.state = {
      editClicked: false,
      deleteClicked: false,
      input: `${JSON.parse(sessionStorage.user).firstName} ${JSON.parse(sessionStorage.user).lastName}`
    }
  }

  handleEditClick = () => {
    this.setState({ editClicked: true })
  }

  handleSaveClick = () => {
    if(this.state.input.split(" ").length > 1){
      UserAdapter.update(this.state.input)
      .then(() => {this.props.fetchUserInfo()})
    }
    this.setState({ editClicked: false })
  }

  handleInputChange = (event) => {
    this.setState({ input: event.target.value })
  }

  handleCancelEdit = () => {
    this.setState({
      editClicked: false,
      input: `${JSON.parse(sessionStorage.user).firstName} ${JSON.parse(sessionStorage.user).lastName}`
    })
  }

  handleDeleteClick = () => {
    this.setState({ deleteClicked: true })
  }

  handleFinalDeleteClick = () => {
    UserAdapter.delete()
    .then(() => {this.props.logOutUser(this.props.history.history)} )
  }

  resetDeleteClick = () => {
    this.setState({ deleteClicked: false })
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
            <div id="account-container" className="col-12">
              <div className="card" >
                <div className="card-body">
                  {
                    this.state.editClicked ? <h4><input id="name-edit-input" type="text" value={this.state.input} onChange={this.handleInputChange}/></h4> :
                    <h4 className="card-title">
                      {
                        Object.keys(this.props.user).length > 0 ?
                        `${this.props.user.firstName} ${this.props.user.lastName}` :
                        `${JSON.parse(sessionStorage.user).firstName} ${JSON.parse(sessionStorage.user).lastName}`
                      }
                    </h4>
                  }

                  <p className="card-text">
                    Email: {JSON.parse(sessionStorage.user).email}
                  </p>
                  <p className="card-text">
                    Member Since:{" "}
                      { new Date(JSON.parse(sessionStorage.user).memberSince).getMonth() + 1 }/
                      { new Date(JSON.parse(sessionStorage.user).memberSince).getDate() }/
                      { new Date(JSON.parse(sessionStorage.user).memberSince).getFullYear()}
                  </p>
                  {this.state.editClicked ?
                    <button id="account-edit-button"
                      className="btn btn-success"
                      onClick={this.handleSaveClick}>Save</button> :
                    <button id="account-edit-button"
                      className="btn btn-warning"
                      onClick={this.handleEditClick}>Edit</button>
                  }
                  {
                    this.state.editClicked ?
                    <button id="account-cancel-edit-button"
                      className="btn btn-danger"
                      onClick={this.handleCancelEdit}>Cancel Edit</button> :
                    <button id="account-delete-button" className="btn btn-danger" onClick={this.handleDeleteClick}>Delete Account</button>
                  }
                </div>
              </div>
            </div>
                  {this.state.deleteClicked ? <DeleteAccountModal resetDeleteClick={this.resetDeleteClick} handleFinalDeleteClick={this.handleFinalDeleteClick}/> : null}
          </div>
     </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchUserInfo, logOutUser }, dispatch)
}

function mapStateToProps(state){
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
