import React from "react"
import ToDoItem from "./ToDoItem.js"

function App(){
    return (
        <div className="todo-list">
            <h2 className="title">To-Do List</h2>
            <ToDoItem />
            <ToDoItem />
            <ToDoItem />
            <ToDoItem />
        </div>
    )
}

export default App