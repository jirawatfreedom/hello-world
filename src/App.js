import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "./logo.svg";
import { bindActionCreators } from "redux";
import { addToDoList } from "./actions/toDoList";
import "./App.css";
import ToDoList from "./containers/ToDoList";
class App extends Component {
  state = {
    toDo: ""
  };

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addToDoList(this.state.toDo);
    this.setState({ toDo: "" });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>To Do List</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              name="toDo"
              value={this.state.toDo}
              onChange={this.handleInput}
            />
            <button type="submit">Submit</button>
          </form>
          <ToDoList />
        </header>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addToDoList
    },
    dispatch
  );
};
export default connect(
  null,
  mapDispatchToProps
)(App);
