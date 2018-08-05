import React from 'react';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import RaisedButton from 'material-ui/RaisedButton';
import NavigateNext from 'material-ui/svg-icons/image/navigate-next';
import '../styles/Product.css';

const Product = ({ item }) => (
  <div className="product">
    <div className="content">
      <img src={item.info.photo} />
      <div className="content-left">
        <h3>{item.info.name}</h3>
        <div className="content-info">
          <div><b>Face Dimension: </b><span>{item.info.faceDimensions}</span></div>
          <div><b>Design Continuity: </b><span>{item.info.designContinuity}</span></div>
          <div><b>Thickness: </b><span>{item.info.thickness}</span></div>
        </div>
      </div>
      <div className="content-right">
        <div className="content-info">
          <p><b>Price:</b></p>
          <h2>{numeral(item.info.price).format('$0,0.00')}</h2>
        </div>
        <RaisedButton
          containerElement={<Link to={`/product/${item._id}`} />}
          className="btn"
          label="See more"
          labelPosition="before"
          primary={true}
          icon={<NavigateNext />}
        />
      </div>
    </div>
  </div>
);

export default Product;