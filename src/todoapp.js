import React, { useState } from 'react';
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import TodoList from './todolist';
import TodoForm from './todoform';
import {v4 as uuid} from 'uuid';

function ToDoApp()  {

  const [todos, setTodos] = useState([]);

  const addToDo = newTodoText => {
  setTodos([...todos, {id: uuid(), task: newTodoText, completed:false}])
}


//handle removing the todo from the list
  const removeToDo = id => {
    console.log('test')
    const newTodosList = todos.filter((item) => item.id !== id);
    console.log(newTodosList);
    console.log(id);
    setTodos(newTodosList);
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
                TODOS WITH HOOKS
            </Typography>
          </Toolbar>
        </AppBar>
        <TodoForm addToDo={addToDo}/>
        <TodoList todos={todos}  removeToDo={removeToDo}/>
      </Paper>
		)

}

export default ToDoApp;

//to do app
//to do form
// to do list
// to do item