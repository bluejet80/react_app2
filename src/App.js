import './App.css';
import './Nav.css';
import { Component } from 'react';
import StartClass from './StartClass';
import Nav from './Nav';

export default class App extends Component {


  render() {

  return (
    <div className="App">
      <Nav />
      <StartClass />
    </div>
  );
  }
}

