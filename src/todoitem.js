import React from 'react';
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
// import IconButton from '@mui/icons-material/IconButton';
import ToggleState from './hooks/ToggleState.js'


function TodoItem({task, completed}) {
  console.log(task)
  const [isOn, setIsOn] = ToggleState(completed);

  return (
    <ListItem>
      <Checkbox checked={completed} onChange={e => {setIsOn()}}/>
      <ListItemText>{task}</ListItemText>
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  )
}

export default TodoItem;