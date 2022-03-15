import TodoApp from './todoapp'
import { TodosProvider } from './context/todos.context.js'

//#this todoprovider will provider context to everything inside of it
function App() {
    return (
        <TodosProvider>
            <TodoApp />
        </TodosProvider>
    )
}

export default App
