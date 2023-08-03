import React from 'react';

function NoteList({ notes, onDelete }) {
    return (
        <div className="note-list">
            {notes.map((note, index) => (
                <div key={index} className="note-item">
                    <h3>{note.title}</h3>
                    <p>{note.content}</p>
                    <button onClick={() => onDelete(index)}>Sil</button>
                </div>
            ))}
        </div>
    );
}

export default NoteList;
