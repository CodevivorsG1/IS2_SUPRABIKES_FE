import React, { Component } from 'react';
import logo from '../img/logoSupraBIKES.PNG';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p className="App-intro">
        <h1 >Bienvenido a SupraBikes</h1>
           <code></code> 
        </p>
      </div>
    );
  }
}

export default App;