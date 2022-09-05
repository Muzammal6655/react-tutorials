import React, { useState } from "react";



const App = ()=>{
const [num, updateNum]= useState(0);
  const addItem = ()=>{
    updateNum(num+1);
  }
  const subItem = ()=>{
    if(num>0){
      updateNum(num-1);
    }else{
      alert("you reavhed the last limit");
    }
  }
  return(
  <>
    <div className="main_div">
      <div className="center_div">
      <h1>{num}</h1>
      <div className="button_div">
        <button className="addbutton" onClick={addItem}> Add </button>
        <button className="subbutton" onClick={subItem}>Sub</button>
      </div>
      </div>
    </div>
  </>);
}

export default App;