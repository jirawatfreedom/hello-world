import { ADD_TODO_LIST, DELETE_TODO_LIST } from "../constant/toDoList";

export const addToDoList = toDo => {
  return {
    type: ADD_TODO_LIST,
    payload: toDo
  };
};
export const deleteToDoList = id => {
  return {
    type: DELETE_TODO_LIST,
    payload: id
  };
};
