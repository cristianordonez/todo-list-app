import React, { useEffect } from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import TodoList from './todolist'
import TodoForm from './todoform'
import { v4 as uuid } from 'uuid'
import useLocalStorageState from './hooks/useLocalStorageState'

function ToDoApp() {
    // console.log('this.context:', this.context);
    //*setting initial state with default todo
    const initialTodos = [
        { id: 1, task: 'Try editing this sample todo', completed: false },
    ]

    //* setting the state
    const [todos, setTodos] = useLocalStorageState('todos', initialTodos)

    //* setting useEffect so it only renders when todos are added
    useEffect(() => {
        window.localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    //*handling adding a todo to the todo state
    const addToDo = (newTodoText) => {
        setTodos([
            ...todos,
            { id: uuid(), task: newTodoText, completed: false },
        ])
    }

    //*handle removing the todo from the list
    const removeToDo = (id) => {
        const newTodosList = todos.filter((item) => item.id !== id)
        setTodos(newTodosList)
    }

    //*handle updating the todo list given id & new text of todo
    const handleEdit = (id, newTask) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, task: newTask } : todo
        )
        setTodos(updatedTodos)
    }

    return (
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: '100vh',
                backgroundColor: '#fafafa',
            }}
            elevation={0}
        >
            <AppBar
                color='primary'
                position='static'
                style={{ height: '64px' }}
            >
                <Toolbar>
                    <Typography color='inherit'>
                        CRISTIAN'S TODO APP WITH REACT HOOKS
                    </Typography>
                </Toolbar>
            </AppBar>

            <TodoForm addToDo={addToDo} />
            <TodoList
                addToDo={addToDo}
                handleEdit={handleEdit}
                todos={todos}
                removeToDo={removeToDo}
            />
        </Paper>
    )
}

export default ToDoApp
