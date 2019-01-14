import { ADD_TODO_LIST, DELETE_TODO_LIST } from "../constant/toDoList";
const initialState = {
  toDoList: []
};
export const toDoListReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case ADD_TODO_LIST:
      return {
        toDoList: [...state.toDoList, action.payload]
      };
    case DELETE_TODO_LIST:
      const newTodoList = state.toDoList.filter((value, index) => {
        return index != action.payload;
      });
      return {
        toDoList: newTodoList
      };
    default:
      return state;
  }
};
