
import React, { useState } from 'react';
import Header from "./Header.jsx";
import CreateNote from './CreateNote.jsx';
import Note from "./Note.jsx";
import Footer from "./Footer.jsx";

function App() {
  const [addItem, setAddItem]=useState([]);
  const AddNote=(note)=>{
    // alert("I am CLicked");

    setAddItem((preVlaue)=>{
      return([...preVlaue,note]);
    });
  }

  const deleteItem = (id)=>{
    // alert("working");
    setAddItem((oldData)=>
      oldData.filter((value, index)=>{
        return index !== id;
      })
      );
  }
  return (
    <>
      <Header />
      <CreateNote passNote={AddNote}/>
      {
        addItem.map((value, index)=>{
          return <Note key={index} id={index} title={value.title} content={value.content} passDelete={deleteItem}/>;
        })
      }
      <Footer />
    </>
  );
}

export default App;
