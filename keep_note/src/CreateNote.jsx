import React, { useState } from "react";
import Button from '@material-ui/core/Button';
// import AddIcon from '@material-ui/icons/Add';
import AddIcon from '@mui/icons-material/Add';

const CreateNote= (props) =>{
    const [note, setNote]= useState({
        title: "",
        content : ""
    });
    const [expand, setExpand]= useState(false);
const InputEvent=(e)=>{
    const {name, value}=e.target;
    setNote((preValue)=>{
        return {
            ...preValue,
            [name]: value
        };
    })
};
const AddEvent= ()=>{
    props.passNote(note);
    setNote({
        title: "",
        content : ""
    });
}
const expandIt=()=>{
    setExpand(true);
}
const closeExpand=()=>{
    setExpand(false);
}
    return(
        <div className="main_note" onDoubleClick={closeExpand}>
        <form>
           {expand? <input type="text" placeholder="Title"  value={note.title} onChange={InputEvent} name="title"/>:null}
            <textarea placeholder="Write a note..." title={note.content} onClick={expandIt} onChange={InputEvent} name="content"></textarea>
            {expand?<Button onClick={AddEvent}>
                <AddIcon className="plus_sign"/>
            </Button>:null}
        </form>

        </div>
    );

}

export default CreateNote;