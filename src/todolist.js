import React from 'react';
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import TodoItem from './todoitem.js';

function TodoList(props) {
  console.log(props.todos)
  return (
    <Paper>
      <List>
      {props.todos.map(todo => (
          <TodoItem  removeToDo={props.removeToDo} key={todo.id} id={todo.id}  task={todo.task} completed={todo.completed}/>



          ))}

      </List>

    </Paper>

  )
}

export default TodoList;