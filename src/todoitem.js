import React from 'react';
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ToggleState from './hooks/ToggleState.js'
import Typography from '@mui/material/Typography';

function TodoItem({task, completed}) {
  console.log(task)
  const [isOn, setIsOn] = ToggleState(completed);


  return (
    // <Typography>

    <ListItem >
      <Checkbox checked={completed} onChange={e => {setIsOn()}}/>
      <ListItemText style={{textDecoration: isOn ? 'line-through' : 'none'}}
      >{task}</ListItemText>
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </ListItem>
    // </Typography>
  )
}

export default TodoItem;