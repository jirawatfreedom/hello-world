import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteToDoList, updateToDoType } from "../actions/toDoList";

const ToDoStyle = styled.p`
  color: ${props => (props.type === "DOING" ? "blue" : "green")};
`;

class ToDo extends React.Component {
  handleDelete = id => {
    console.log(id);
    this.props.deleteToDoList(id);
  };

  handleDone = id => {
    console.log(id);
    this.props.updateToDoType(id, "DONE");
  };

  render() {
    const { id } = this.props;
    return (
      <li>
        <ToDoStyle type={this.props.toDo.type}>
          {this.props.toDo.name}
        </ToDoStyle>
        {this.props.toDo.type === "DOING" && (
          <button onClick={() => this.handleDone(id)}>Mark As Done</button>
        )}
        <button onClick={() => this.handleDelete(id)}>Delete</button>
      </li>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      deleteToDoList,
      updateToDoType
    },
    dispatch
  );
};
export default connect(
  null,
  mapDispatchToProps
)(ToDo);
