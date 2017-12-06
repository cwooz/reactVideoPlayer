import React from 'react';
import ReactDOM from 'react-dom';

//create new component
// const App = function() {
const App = () => {
  return <div>Hi!</div>;
}

//show component on webpage
ReactDOM.render(<App />, document.querySelector('.container'));
