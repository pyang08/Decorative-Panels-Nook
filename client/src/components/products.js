import React, {Component} from "react";
import axios from "axios";
import { initCatalog } from '../actions/catalogActions';
import { connect } from 'react-redux';
import Product from './Product';




// export default class Products extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       products: []
//     }
//   }
  class Products extends React.Component {

    componentWillMount() {
      this.props.initCatalog();
    }
    render() {
        return (
          <div className="loader">
          <img src="/img/loader.gif" />
          <h1>LOADING PRODUCTS...</h1>
        </div>
        )

      }

  }

  const mapStateToProps = (state) => ({

  });
  const mapDispatchToProps = (dispatch) => ({
    initCatalog: () => dispatch(initCatalog()),
  });

  export default connect(mapStateToProps, mapDispatchToProps)(Products);
//   componentDidMount() {
//     axios.get('/api/products')
//       .then((response) => {
//         this.setState({products: response.data});
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
  
//   render() {
//     return (
//       <div>
//         <h1>products!</h1>
//          { this.state.products.map((item) => {
//             return (
//               <div key={item.type} >
//                 <h3>{item.type}</h3>
//                 <h3>{item.size}</h3>
//                 <img src={item.image} width="400"/>
//               </div>
//             );
//           }) }
//       </div>
//     )
//   }
// }