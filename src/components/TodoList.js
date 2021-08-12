import TodoItem from "./TodoItem"

const TodoList = ({todos, deleteTodo}) => {
    return (
        <div>
            <TodoItem todos={todos} deleteTodo={deleteTodo}/>
        </div>
    )
}

export default TodoList
