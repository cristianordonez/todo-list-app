import React from 'react';
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import TodoItem from './todoitem.js';

function TodoList({ removeToDo, todos, handleEdit, addToDo }) {

  return (
    <Paper>
      <List>
      {todos.map(todo => (
          <TodoItem
            removeToDo={removeToDo}
            key={todo.id}
            id={todo.id}
            task={todo.task}
            completed={todo.completed}
            handleEdit={handleEdit}
            addToDo={addToDo}
           />
          ))}
      </List>
    </Paper>
  )
}

export default TodoList;