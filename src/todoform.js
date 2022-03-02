import React, { useState } from 'react';
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import useInputState from './hooks/useInputState.js'

function TodoForm(props) {
  //*use the imported hook to get change to input form
  const [value, handleChange, reset] = useInputState('')

  //*form control will updata value on change, and on submit will create new todo
  return (
  <FormControl onSubmit={e => {
    e.preventDefault();
    props.addToDo(value);
    reset();
  }}>
    <Grid container
      direction="row"
      justifyContent="center"
      alignItems="center"
      component="form"
      m={2}
      p={1}
    >
    <Grid item>
      <TextField
        onChange={handleChange}
        size="small"
        value={value}
        label="Enter New Todo"
        variant="outlined"
      />
    </Grid>
    <Grid item>
      <Button type="submit"
        variant="outlined"
        size="small"
        disabled={!value}
        startIcon={<AddIcon />}
      >
      Add Todo
      </Button>
      </Grid>
    </Grid>
  </FormControl>

  )
}

export default TodoForm;