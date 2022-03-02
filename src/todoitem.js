import React from 'react';
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ToggleState from './hooks/ToggleState.js'


function TodoItem({task, completed}) {
  console.log(task)
  const [isOn, setIsOn] = ToggleState(completed);


  return (


    <ListItem >
      <Checkbox checked={completed} onChange={e => {setIsOn()}}/>
      <ListItemText style={{textDecoration: isOn ? 'line-through' : 'none'}}
      >{task}</ListItemText>
      <ListItemSecondaryAction>
      <IconButton aria-label='Delete'>
        <EditIcon />
      </IconButton>
      <IconButton>
        <DeleteIcon />
      </IconButton>

      </ListItemSecondaryAction>
    </ListItem>

  )
}

export default TodoItem;