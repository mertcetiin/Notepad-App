import './App.css';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import { useState } from 'react';

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note, index) => index !== id);
    setNotes(updatedNotes);
  };

  return (
    <div className="app">
      <h1>Not Defteri Uygulaması</h1>
      <NoteForm onSubmit={addNote} />
      <NoteList notes={notes} onDelete={deleteNote} />
    </div>
  );
}

export default App;