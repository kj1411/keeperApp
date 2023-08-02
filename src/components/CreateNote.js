import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add'
// import { Button } from '@mui/material';
import { Fab } from '@mui/material';
import {Zoom} from '@mui/material';
// import Zoom from '@mui/material';
function CreateNote(props) {

    const [isExpended, setExpended] = useState(false)
    const [note, setNote] = useState({
        title: "",
        content:""
    })
    function handleChange(event) {
        const {name,value} = event.target;
        setNote(previousNote => {
            return {
                ...previousNote,
                [name]:value
            }
        })
    }
    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault()
    }
    return (
        <form className='create-note'>
            {isExpended && <input onChange={handleChange} name="title" placeholder='Title' value={note.title} />}
            <textarea onClick={() => setExpended(true)} onChange={handleChange} name='content' placeholder='Take a Note...' value={note.content} rows={isExpended ? 3 : 1} />
            <Zoom in={isExpended}>
                <Fab onClick={submitNote}><AddIcon /></Fab>
            </Zoom>
        </form>
    );
}

export default CreateNote;