import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NameComponent from './NameComponent';
class App extends Component {
  state = {
    fullName: "Jirawat "
  };

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
            <NameComponent
      fullName={this.state.fullName}
      handleInput={this.handleInput}
      />
            <p>{this.state.fullName}</p>
          </header>
        </div>
    );
  }
}

export default App;
