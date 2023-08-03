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
                placeholder="Başlık"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Notunuzu buraya yazın..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button type="submit">Ekle</button>
        </form>
    );
}

export default NoteForm;
