import React from "react";
import { connect} from "react-redux";
import { bindActionCreators } from "redux";
import { deleteToDoList } from "../actions/toDoList";
class ToDo extends React.Component {
    handleDelete = id => {
        console.log(id);
        this.props.deleteToDoList(id);
    };

    handleDone = id =>{
        console.log(id);
    };

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
const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {
        deleteToDoList
      },
      dispatch
    );
  };
  export default connect(
    null,
    mapDispatchToProps
  )(ToDo);