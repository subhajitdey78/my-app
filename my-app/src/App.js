import React from 'react';
import './App.css';
import Welcome from './Welcome';

// class Welcome extends React.Component{
  // constructor(props){
  //   super(props)
  // }
//   render() {
//     return<h1>Welocme to the class</h1>
//   }
// }

function App() {
  return (
    <div className="app">
      <Welcome title = "Mr" name = "John" age ={20} />
      <Welcome title = "Mr" name = "Peter" age ={40} />
    </div>
  );
}

export default App;
