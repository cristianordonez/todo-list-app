import React, { useState } from 'react';
import Stack from "@mui/material/Stack";
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

    <Stack spacing={2} direction="column" justifyContent="center" alignItems="center stretch" m={3}>

        <TextField
          onChange={handleChange}
          value={value}
          label="Enter New Todo"
          variant="outlined"
        />

        <Button type="submit"
          variant="outlined"
          onClick={e => {
            console.log('clicked')
            e.preventDefault();
            props.addToDo(value);
            reset();
          }}
          disabled={!value}
          startIcon={<AddIcon />}
        >
        Add Todo
        </Button>
      </Stack>


  )
}

export default TodoForm;