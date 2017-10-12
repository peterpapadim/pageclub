import React, { Component } from 'react';
import Navbar from '../containers/Navbar';

class Cart extends Component {
  render(){
    return(
      <div className="container-fluid">
          <div className="row" >
            <div id="navbar" className="col-12">
              <Navbar history={this.props.history.history}/>
            </div>
          </div>
          <div className="row page-window">
            <div id="cart-container" className="col-12">
              Cart
            </div>
          </div>
     </div>
    )
  }
}

export default Cart;
