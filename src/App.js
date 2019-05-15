import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      working: false
    }
  }

  handleClick = () => {
    this.setState ({ working : !this.state.working })
  }
  render() {
    const work = this.state.working ? 'work' : 'App-logo';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={work} alt="logo" />
          <button onClick={this.handleClick}>homer work
        </button>
        </header>
      </div>
    );
  }
}

export default App;
