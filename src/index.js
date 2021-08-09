import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";


//dev tools
import {  composeWithDevTools } from "redux-devtools-extension";
//lui il est dans la console
import logger from'redux-logger';

//thunk c'est un middlewarepour des  requete asynchrone avec redux
import thunk from 'redux-thunk';

import App from './App';
import './styles/index.scss';




//devtools jaune et rouge(le petit icone béta)


const store = createStore(

  rootReducer,composeWithDevTools(applyMiddleware(thunk, logger))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>
  ,
  document.getElementById('root')
);


