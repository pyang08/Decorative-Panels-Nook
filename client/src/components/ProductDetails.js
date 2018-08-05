import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import numeral from 'numeral';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import AddShoppingCart from 'material-ui/svg-icons/action/add-shopping-cart';
import KeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import '../styles/ProductDetails.css';

class ProductDetails extends React.Component {

  state = {
    postData: {
      user: this.props.loggedUser._id,
      product: this.props.product._id,
      quantity: 1
    },
    snackbarOpen: false
  }

  onQuantityChange = (e) => {
    let value = e.target.value;
    this.setState((prevState) => ({
      postData: { ...prevState.postData, quantity: value*1 }
    }));
  }

  addToCart = () => {
    axios.post('/api/cart', this.state.postData);
    this.setState({ snackbarOpen: true });
  }

  render() {
    return (
      <div className="product-details-container">
        <h1>{this.props.product.info.name}</h1>
        <div className="product-details">
          <div className="product-image">
            <img src={this.props.product.info.photo} />
          </div>
          <div className="product-info">
            <table>
              <tr>
                <th>Model</th>
                <td>{this.props.product.info.name}</td>
              </tr>
              <tr>
                <th>Dimensions</th>
                <td>{this.props.product.info.dimensions}</td>
              </tr>
              <tr>
                <th>Weight</th>
                <td>{this.props.product.info.weight}</td>
              </tr>
              <tr>
                <th>Face Dimensions</th>
                <td>{this.props.product.info.faceDimensions}</td>
              </tr>

              <tr>
                <th>Design Continuity</th>
                <td>{this.props.product.info.designContinuity}</td>
              </tr>
              <tr>
                <th>Thickness</th>
                <td>{this.props.product.info.thickness}</td>
              </tr>
              <tr>
                <th>Color</th>
                <td>{this.props.product.info.color}</td>
              </tr>
            </table>
            <Snackbar
              open={this.state.snackbarOpen}
              message={this.props.loggedUser ? 'Item added to your cart.' : 'You must be logged in!'}
              autoHideDuration={4000}
              bodyStyle={this.props.loggedUser ? { 'background': '#64DD17' } : { 'background': '#F44336' }}
            />
          </div>
        </div>
        <div className="product-handle">
          <div className="left">
            <RaisedButton
              containerElement={<Link to="/" />}
              className="btn"
              label="Back to catalog"
              labelPosition="after"
              secondary={true}
              icon={<KeyboardArrowLeft />}
            />
          </div>
          <div className="right">
            <div className="price">
              <span className="price-text">Price: </span>
              <span className="price-num">{numeral(this.props.product.info.price).format('$0,0.00')}</span>
            </div>
            <div className="quantity">
              <span className="price-text">Quantity: </span>
              <span><input type="number" value={this.state.postData.quantity} min="1" max="5" onChange={this.onQuantityChange} /></span>
            </div>
            <div className="btn">
              <RaisedButton
                onClick={this.addToCart}
                label="Add to cart"
                labelPosition="before"
                primary={true}
                icon={<AddShoppingCart />}
              />
            </div>
           </div> 
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  loggedUser: state.loggedUser,
  product: state.catalog.items.find((item) => item._id == props.match.params.id)
});

export default connect(mapStateToProps)(ProductDetails);