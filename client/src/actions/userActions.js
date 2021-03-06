import axios from 'axios';

const getUser = () => {
  return (dispatch) => {
    axios.get('/api/user')
      .then((res) => dispatch({
        type: 'GET_USER',
        user: res.data
      }))
      .catch((err) => console.log(err));
  }
}

export { getUser };