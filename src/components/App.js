import React from "react"
import ToDoItem from "./ToDoItem.js"
import toDoData from "./ToDoData"

/*function App(){
    const toDoComponent = toDoData.map(data => <ToDoItem key={data.id} item={data}/>)
    return (
        <div className="todo-list">
            <h2 className="title">To-Do List</h2>
            {toDoComponent}
        </div>
    )
}*/

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            todo: toDoData
        }
        this.CheckBox = this.CheckBox.bind(this)
    }

    CheckBox(id){
        this.setState(prevState => {
            const updatedToDo = prevState.todo.map(todos =>{
                if (todos.id === id){
                    todos.status = !todos.status
                }
                return todos
            })
            return{
                todo: updatedToDo
            }
        })
    }
    
    render(){
        const toDoComponent = this.state.todo.map(data => <ToDoItem key={data.id} item={data} CheckBox={this.CheckBox}/>)

        return (
            <div className="todo-list">
                <h2 className="title">To-Do List</h2>
                {toDoComponent}
            </div>
        )
    }
}



export default App