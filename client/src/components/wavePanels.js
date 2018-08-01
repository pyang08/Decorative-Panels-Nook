import React, {Component} from "react";
import axios from "axios";

export default class wavePanels extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wavePanels: []
    }
  }

  componentDidMount() {
    axios.get('/api/wavePanels')
      .then((response) => {
        this.setState({wavePanels: response.data});
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  render() {
    return (
      <div>
        <h1>wavePanels!</h1>
         { this.state.wavePanels.map((item1) => {
            return (
              <div key={item1.type} >
                <h3>{item1.type}</h3>
                <h3>{item1.size}</h3>
                <img src={item1.image} width="400"/>
              </div>
            );
          }) }
      </div>
    )
  }
}