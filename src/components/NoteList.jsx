import React from 'react'

function NoteList({ notes }) {
    return (
        <div>
            {notes.map((note, id) => (
                <div key={id}>
                    <h3>{note.title}</h3>
                    <p>{note.content}</p>
                </div>
            ))}
        </div>
    )
}

export default NoteList;