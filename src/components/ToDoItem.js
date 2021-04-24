import React from "react"

function ToDoItem(props){
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.item.status}/>
            <p>{props.item.task}</p>
        </div>
    )
}

export default ToDoItem