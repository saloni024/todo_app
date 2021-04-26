import React from "react"

function ToDoItem(props){
    const style = {
        color: "gray",
        textDecoration: "line-through",
        fontStyle: "italic"
    }
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.item.status} onChange={() => props.CheckBox(props.item.id)}/>
            <p style={props.item.status ? style : null}>{props.item.task}</p>
        </div>
    )
}

export default ToDoItem