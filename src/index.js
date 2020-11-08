import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import './index.css';
import {createStore, applyMiddleware,compose,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import menuReducer from './reducers/menuReducer';
import orderReducer from './reducers/orderReducer';
import rootReducer from './reducers/rootReducers';
import {BrowserRouter as Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  
    <Provider store={store}>
      <Router>
      <App />

      </Router>
    
    </Provider>,
    
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

