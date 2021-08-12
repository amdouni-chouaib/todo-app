import Nav from "./components/Nav"
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

import './App.css';
import React from "react";

class App extends React.Component {
  constructor() {
    super()
    this.state = {newTodo: "", todos: []}
    this.handleInput = this.handleInput.bind(this)
    this.handleTodos = this.handleTodos.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)

  }

  handleInput(e) {
    this.setState({newTodo: e.target.value})
  }

  handleTodos() {
    if (this.state.newTodo.length == 0) {
      alert("you cant enter an empty todo")
    } else {
      this.setState({todos: [...this.state.todos, this.state.newTodo]})
      this.setState({newTodo :""})
    }
  }

  deleteTodo(e) {
      this.setState({todos: this.state.todos.filter((todo) => {
        return e.target.name !== todo
      })})
  }


  render() {
    return (
    <div className="App">
       <Nav />
       <AddTodo newTodo={this.state.newTodo} handleInput={this.handleInput} handleTodos={this.handleTodos}/> <br/>
       <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} />
    </div>
    )
  } 
}

export default App;
