import React, {Component} from "react";
import axios from "axios";

export default class products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    }
  }

  componentDidMount() {
    axios.get('/api/products')
      .then((response) => {
        this.setState({products: response.data});
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  render() {
    return (
      <div>
        <h1>products!</h1>
         { this.state.products.map((item) => {
            return (
              <div key={item.type} >
                <h3>{item.type}</h3>
                <h3>{item.size}</h3>
                <img src={item.image} width="400"/>
              </div>
            );
          }) }
      </div>
    )
  }
}