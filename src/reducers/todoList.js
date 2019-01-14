import { ADD_TODO_LIST } from "../constant/toDoList"
const initialState = {
  toDoList:[]
};
export const toDoListReducer = (state = initialState, action) => {

  const { type} = action;
  switch(type) {
    case ADD_TODO_LIST: return {
      toDoList: [...state.toDoList,action.payload]
    };
    default:
      return state
  }
};
