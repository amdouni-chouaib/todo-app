import React from "react"
import {Button} from "react-bootstrap"

// const AddTodo = ({newTodo, handleInput, handleTodos}) =>  {
//     return (
//         <div style={{marginTop :"10%"}}>
//             <input placeholder="enter your todo" value={newTodo} onChange={handleInput}/> 
//             <Button onClick={handleTodos}>Add Todo</Button>
//         </div>
//         )
// }


class AddTodo extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div style={{marginTop :"10%"}}>
                <input placeholder="enter your todo" value={this.props.newTodo} onChange={this.props.handleInput}/> 
        
                <Button onClick={this.props.handleTodos}>Add Todo</Button>
            </div>
            )
        }
    }

export default AddTodo