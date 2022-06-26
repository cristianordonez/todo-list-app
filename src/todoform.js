import React, { useContext } from 'react'
import './styles/todoform.css'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import AddIcon from '@mui/icons-material/Add'
import useInputState from './hooks/useInputState.js'
import { TodosContext } from './context/todos.context.js'

function TodoForm(props) {
  //*use the imported hook to get change to input form
  const [value, handleChange, reset] = useInputState('')
  const { dispatch } = useContext(TodosContext)
  //*form control will updata value on change, and on submit will create new todo
  return (
    <div className='todoform'>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          props.addToDo(value)
          dispatch({ type: 'ADD', task: value })
          reset()
        }}
      >
        <Stack direction='row'>
          <TextField
            onChange={handleChange}
            value={value}
            sx={{ minWidth: '15rem' }}
            label='Enter New Todo'
            data-testid='enter-todo-form'
            variant='outlined'
            fullWidth
          />
          <Button
            type='submit'
            variant='outlined'
            sx={{ height: '56px' }}
            disabled={!value}
            startIcon={<AddIcon />}
          >
            Add Todo
          </Button>
        </Stack>
      </form>
    </div>
  )
}

export default TodoForm
