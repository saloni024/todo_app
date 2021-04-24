import React from "react"
import ToDoItem from "./ToDoItem.js"
import toDoData from "./ToDoData"

function App(){
    const toDoComponent = toDoData.map(data => <ToDoItem key={data.id} item={data}/>)
    return (
        <div className="todo-list">
            <h2 className="title">To-Do List</h2>
            {toDoComponent}
        </div>
    )
}

export default App