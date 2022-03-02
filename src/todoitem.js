import React from 'react';
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

function TodoItem({task}) {
  console.log(task)
  return (
    <ListItem>
      <ListItemText>{task}</ListItemText>
    </ListItem>
  )
}

export default TodoItem;