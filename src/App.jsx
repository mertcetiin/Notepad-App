import './App.css'
import NoteForm from './components/NoteForm'
import NoteList from './components/NoteList'
import { useState } from 'react'

function App() {

  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };


  return (
    <div>
      <h1>Not Defteri Uygulaması</h1>
      <NoteForm onSubmit={addNote} />
      <NoteList notes={notes} />
    </div>
  )
}

export default App;