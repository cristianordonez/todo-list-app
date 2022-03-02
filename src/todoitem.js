import React from 'react';
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
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

  //* will render normally if isEditing is false, otherwise will render text fiedl
  return (
    <div>
      {isEditing
      ?
      <Grid container spacing={6} m={4} alignItems="center" justifyContent="center space-evenly">
        <form onSubmit={e =>{
            e.preventDefault()
            handleEdit(id, value)
            // setIsOn();
            reset();
            setIsEditing();
          }}>

        <TextField
          onChange={handleChange}
          value={value}
          label={`Edit Todo: ${task}`}
          variant="outlined"
        />
         <Button
          type="submit"
          color="success"
          startIcon={<PublishIcon />}
          >
          Submit Todo
          </Button>
          <Button color="error" onClick={e => setIsEditing()} aria-label="Cancel" startIcon={<CancelIcon />}>
            Cancel
          </Button>
        </form>
          </Grid>
      :
      <Paper style={{
        margin: 4,
        padding: 1
      }}
        elevation={4}
      >
      <ListItem >
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
      </Paper>
      }

</div>
  )
}

export default TodoItem;
