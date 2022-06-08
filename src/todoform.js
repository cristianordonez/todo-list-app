import React, { useContext } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import useInputState from './hooks/useInputState.js'
import './styles/todoform.css'
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
                <TextField
                    onChange={handleChange}
                    value={value}
                    label='Enter New Todo'
                    data-testid='enter-todo-form'
                    variant='outlined'
                    sx={{ width: 600 }}
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
            </form>
        </div>
    )
}

export default TodoForm
