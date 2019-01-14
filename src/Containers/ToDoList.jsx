import React from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";

const ToDoList = props => {
    return (
        <ul>
            {props.toDoListReducer.toDoList.map((toDoList, index) => (
                <ToDo id={index} key={index} toDo={toDoList} />
            ))}
        </ul>
    );
}
const mapStateToProps = ({ toDoListReducer }) => {
    return { toDoListReducer };
}

export default connect(mapStateToProps)(ToDoList);
