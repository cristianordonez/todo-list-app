import React, { createContext, useReducer } from "react";
import reducer from '../reducers/todo.reducer.js';

const initialTodos = [
  { id: 1, task: "Try editing this sample todo", completed: false }
];

//#create the context
export const TodosContext = createContext();

//#everytime you run createcontect, you get a provider as well
export function TodosProvider(props) {
    const [todos, dispatch] = useReducer(reducer, initialTodos);
    return(
    <TodosContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodosContext.Provider>
    )

}

