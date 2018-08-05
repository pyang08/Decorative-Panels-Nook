import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import catalogReducer from './reducers/catalogReducer';
import thunk from 'redux-thunk';
import ShoppingCart from './components/ShoppingCart';
import filtersReducer from './reducers/filtersReducer';
import sortReducer from './reducers/sortReducer';




import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    combineReducers({
    
      
      catalog: catalogReducer,
      filters: filtersReducer,
      sortBy: sortReducer
      
      
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  ReactDOM.render(<Provider store={store}><ShoppingCart/></Provider>, document.getElementById('root'));
//   registerServiceWorker();
