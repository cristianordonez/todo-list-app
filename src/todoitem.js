import React from 'react';
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import useToggleState from './hooks/useToggleState.js';
import useInputState from './hooks/useInputState.js';
import TextField from "@mui/material/TextField";
import PublishIcon from '@mui/icons-material/Publish';
import CancelIcon from '@mui/icons-material/Cancel';
import Button from "@mui/material/Button";

function TodoItem({task, completed, removeToDo, id, handleEdit, addToDo}) {
  const [isOn, setIsOn] = useToggleState(completed);
  const [isEditing, setIsEditing] = useToggleState(false);
  const [value, handleChange, reset] = useInputState('');

  return (
    <div className="todoitem">
      {isEditing
      ?
        <div>
      <TextField
      onChange={handleChange}
      value={value}
      label='edit to do'
      variant="outlined"
       />
         <Button
         onClick={e =>{
          handleEdit(id, value)
          reset();
          setIsEditing();
         }  }
         type="submit"
        variant="outlined"
        startIcon={<PublishIcon />}
      >
        Edit Todo
      </Button>
        <IconButton onClick={e => setIsEditing()} aria-label="Cancel">
          <CancelIcon />
        </IconButton>
        </div>
      :<ListItem >
        <Checkbox checked={isOn} onChange={e => {setIsOn()}}/>
        <ListItemText style={{textDecoration: isOn ? 'line-through' : 'none'}}
        >{task}</ListItemText>
        <ListItemSecondaryAction>
        <IconButton onClick={e => setIsEditing()}  aria-label='Edit'>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => removeToDo(id)} aria-label="Delete">
          <DeleteIcon />
        </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      }
    </div>
  )
}

export default TodoItem;
