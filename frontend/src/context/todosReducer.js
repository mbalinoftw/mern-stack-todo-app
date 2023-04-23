import { ACTION_TYPES } from './todosActionTypes';

export const initialState = {
  isLoading: false,
  todos: [],
  hasError: false,
};

export const todosReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_START:
      return {
        ...state,
        isLoading: true,
      };
    case ACTION_TYPES.FETCH_SUCCESS:
      return {
        todos: action.payload,
        isLoading: false,
        hasError: false,
      };
    case ACTION_TYPES.FETCH_ERROR:
      return {
        todos: [],
        isLoading: false,
        hasError: true,
      };
    case ACTION_TYPES.ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case ACTION_TYPES.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo._id !== action.payload._id),
      };
    default:
      return state;
  }
};