import { createContext, useReducer } from "react";
import { initialState, todosReducer } from "./todosReducer";

export const TodosContext = createContext();

export const TodosContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todosReducer, initialState);

  return <TodosContext.Provider value={{ state, dispatch }}>{children}</TodosContext.Provider>;
};
