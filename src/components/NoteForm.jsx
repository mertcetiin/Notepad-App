import React, { useState } from 'react';

function NoteForm({ onSubmit }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() !== '' && content.trim() !== '') {
            onSubmit({ title, content });
            setTitle('');
            setContent('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="note-form">
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Write here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default NoteForm;
