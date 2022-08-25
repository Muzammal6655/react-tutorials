import React from "react";

const ToDoList= (prop)=>{

    return (
    <>
        <div className="todo_style">
        <i className="fa-solid fa-xmark" onClick={()=>prop.onSelect(prop.id)}></i>
            <li>{prop.text}</li>
        </div>
    </>);
}
export default ToDoList;