import {
  ADD_TODO_LIST,
  DELETE_TODO_LIST,
  UPDATE_TODO_TYPE
} from "../constant/toDoList";
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
        return index !== action.payload;
      });
      return {
        toDoList: newTodoList
      };
    case UPDATE_TODO_TYPE:
      return {
        toDoList: state.toDoList.map((value, i) => {
          const { index, type } = action.payload;
          if (i === index) {
            return { ...value, type };
          }
          return value;
        })
      };
    default:
      return state;
  }
};
