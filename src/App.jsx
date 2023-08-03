import './App.css'
import NoteForm from './components/NoteForm'
import NoteList from './components/NoteList'
import { useState } from 'react'

function App() {

  const [notes, setNotes] = useState([]);

  const onAdd = (note) => {
    setNotes([...notes, note])
  }

  return (
    <div>
      <h1>Not Defteri Uygulaması</h1>
      <NoteForm onSubmit={onAdd} />
      <NoteList />
    </div>
  )
}

export default App;