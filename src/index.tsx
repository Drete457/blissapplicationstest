import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import Patch from './Controller/router';
import { createStore } from 'redux';

//action
const save = () => {
  return {
    type: "SAVE"
  }
}

const update = () => {
  return {
    type: 'UPDATE'
  }
}


//reducer
const action = ({ state = 0, action } : {state: number, action: any}) => {
  switch (action.type) {
    case "SAVE":
      return state + 1;
    case "UPDATE":
      return state - 1;
  }
}

//store
let store = createStore(action);
store.subscribe(() => console.log(store.getState()));

//dispatch
store.dispatch(save());

ReactDOM.render(
  <React.StrictMode>
    <Patch />
  </React.StrictMode>,
  document.getElementById('root')
);
