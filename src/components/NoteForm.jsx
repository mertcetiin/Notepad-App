import { useState } from 'react'

function NoteForm({ onSubmit }) {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title !== '' && content !== '') {
            onSubmit({ title, content })
            setTitle('');
            setContent('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={title} placeholder='Title' onChange={(e) => setTitle(e.target.value)} />
            <br />
            <br />
            <textarea placeholder='Write Here...' value={content} onChange={(e) => setContent(e.target.value)} />
            <br />
            <br />
            <button type='submit'>Add</button>
        </form>
    )
}

export default NoteForm;