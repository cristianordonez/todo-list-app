import React, { Component, createContext} from "react";

//all themes
const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

//create the context
export const TodosContext = createContext();

//everytime you run createcontect, you get a provider as well
//will provider
export class TodosProvider extends Component {

  render() {
    return(
    <TodosContext.Provider value={themes}>
      {this.props.children}
    </TodosContext.Provider>
    )
  }
}

