import {Button} from "react-bootstrap"

const TodoItem = ({todos, deleteTodo}) => {
    return (
        <div >
            {todos.map((todo, index) => {
                return (
                    <div key={index} style={{border:"1px solid black", borderRadius:"5px",width:"30%", margin:"auto", display:"flex", justifyContent:"space-between", padding:"5px 10px", marginBottom:"9px"}}>
                        <h3 >{todo}</h3>
                        <Button variant="danger" name={todo} onClick={deleteTodo}>Delete</Button>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoItem
