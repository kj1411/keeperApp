import React, { useState } from "react";
import Heading from "./Header";
import Footer from "./Footer";
import Note from "./Note";
// import notes from "../notes";
import CreateNote from "./CreateNote";

function App() {

  const [notes, setNotes] = useState([])

  function addNote(note) {
    setNotes(prevNote => {
      return [...prevNote, note]
    })
  }
  function deleteNote(id) {
    setNotes(prevNote => {
      return prevNote.filter((notesItem, index) => {
        return index !== id;
      })
    })
  }
  return (
    <div>
      <Heading />
      <CreateNote onAdd={addNote} />
      {notes.map((notesItem,index) => (
        <Note
          key={index}
          id={index}
          title={notesItem.title}
          content={notesItem.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
