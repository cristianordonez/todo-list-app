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
  // const initialTodos = [
  //   { id: 1, task: "clean fishtank", completed:false },
  //   { id: 1, task: "clean room", completed:false },
  //   { id: 1, task: "clean car", completed:false }
  // ]
  const [todos, setTodos] = useState([]);
/*above is the same as doing this below, expect in only one line *
  const todoappState = useState('');
  const todo = todoappState[0];
  const settodo = todoappState[1];
 *
 */
const addToDo = newTodoText => {
  console.log(newTodoText);
  setTodos([...todos, {id: uuid(), task: newTodoText, completed:false}])
  console.log(todos);
}


// addTodos('test')


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
        <TodoList todos={todos} />
      </Paper>
		)

}

export default ToDoApp;

//to do app
//to do form
// to do list
// to do item