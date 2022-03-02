import React, { useState } from 'react';
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import useInputState from './hooks/useInputState.js'

function TodoForm(props) {
  //use the imported hook to get change
  //can take in optional third arg
  const [value, handleChange, reset] = useInputState('')

  return (

  <FormControl onSubmit={e => {
    e.preventDefault();
    props.addToDo(value);
    reset();
  }}>
    <Grid container
    direction="row"
    className="todoform"
    component="form"
    m={2}
    p={1}
    >
      <Button type="submit"
        variant="outlined"
        startIcon={<AddIcon />}
      >
        Add Todo
      </Button>

      <TextField
      onChange={handleChange}
      value={value}
      label="Enter New Todo"
       variant="outlined"
       />
      </Grid>
  </FormControl>

  )
}

export default TodoForm;