import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyB8sPzLRQDO2Zti7_j_0fPEitMihDfaNpI';

//create new component
// const App = function() {
const App = () => {
  return <div>Hi!</div>;
}

//show component on webpage
ReactDOM.render(<App />, document.querySelector('.container'));
