import React from "react";

class ToDo extends React.Component {
    handleDelete = id => {};

    handleDone = id =>{};

    render(){
        const { id } =this.props;
        return (
            <li>
                {this.props.toDo}
                <button onClick={() => this.handleDone(id)}>Mark As Done</button>
                <button onClick={ ()=> this.handleDelete(id)}>Delete</button>
            </li>
        );
    }
}
export default ToDo;