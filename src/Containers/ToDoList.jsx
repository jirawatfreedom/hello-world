import React from "react";
import { connect } from "react-redux";

const ToDoList = props => {
    return (
        <ul>
            {props.toDoListReducer.toDoList.map(toDoList => (
                <li>{toDoList}</li>
            ))}
        </ul>
    );
}
const mapStateToProps = ({ toDoListReducer }) => {
    return { toDoListReducer };
}

export default connect(mapStateToProps)(ToDoList);