import React, { useState } from 'react';
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import TodoList from './todolist';
import TodoForm from './todoform';
import {v4 as uuid} from 'uuid';

function ToDoApp()  {
  //*setting initial state with empty array which will be filled with todo objects
  const [todos, setTodos] = useState([]);

  //*handling adding a todo to the todo state
  const addToDo = newTodoText => {
    setTodos([...todos, {id: uuid(), task: newTodoText, completed:false}])
  }

//*handle removing the todo from the list
  const removeToDo = id => {
    const newTodosList = todos.filter((item) => item.id !== id);
    setTodos(newTodosList);
  }

  //*handle updating the todo list given id & new text of todo
  const handleEdit = (id, newTask) => {
   const updatedTodos = todos.map(todo =>
    todo.id === id ? { ...todo, task: newTask } : todo
    )
    setTodos(updatedTodos);
  }

    return (
      <Paper
        style= {{
          padding: 0,
          margin: 0,
          height: "100vh",
          backgroundColor: "#fafafa"
        }}
        elevation={0}
      >
        <AppBar color='primary' position='static' style={{ height: "64px" }}>
          <Toolbar>
            <Typography color='inherit'>
                CRISTIAN'S TODO APP WITH REACT HOOKS
            </Typography>
          </Toolbar>
        </AppBar>
        <TodoForm addToDo={addToDo}/>
        <TodoList
          addToDo={addToDo}
          handleEdit={handleEdit}
          todos={todos}
          removeToDo={removeToDo}
        />
      </Paper>
		)
}

export default ToDoApp;
