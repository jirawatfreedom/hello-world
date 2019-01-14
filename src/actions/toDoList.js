import {
  ADD_TODO_LIST,
  DELETE_TODO_LIST,
  UPDATE_TODO_TYPE
} from "../constant/toDoList";

export const addToDoList = toDo => {
  return {
    type: ADD_TODO_LIST,
    payload: {
      name: toDo,
      type: "DOING"
    }
  };
};
export const updateToDoType = (index, status) => {
  return {
    type: UPDATE_TODO_TYPE,
    payload: {
      index,
      type: status
    }
  };
};

export const deleteToDoList = id => {
  return {
    type: DELETE_TODO_LIST,
    payload: id
  };
};
