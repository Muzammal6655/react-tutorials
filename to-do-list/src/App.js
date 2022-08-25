import React, { useState } from "react";
import ToDoList from "./ToDOList";


const App= ()=>{
  const [itemvalue, updateItemvalue]=useState("");
  const [item , upadteListItem] = useState([]);

  const inputItem =(e)=>{
    updateItemvalue(e.target.value);
  };

  const listOfItems= (e)=>{
    upadteListItem((preValue)=>{
      return([...preValue,itemvalue]);
    });
    updateItemvalue('');
  }
  const deleteItems=(id)=>{
    console.log("delete");

    upadteListItem((preValue)=>{
      return preValue.filter((arrElement, index)=>{
        return index !== id;  
      })
    })
  }

  return(
  <>
    <div className="main_div">
      <div className="center_div">
        <h1> ToDo List </h1>

        <input type="text" placeholder="add an item" onChange={inputItem} value={itemvalue}/>
        <button type="submit" onClick={listOfItems}> + </button>

        <ol>
          {/* <li>{itemvalue}</li> */}
          {item.map((itemvalue, index)=>{
            return <ToDoList  
            key={index}
            id={index}
            text={itemvalue}
            onSelect={deleteItems}
            />;
          })}
        </ol>
      </div>
    </div>
  </>);
}

export default App;