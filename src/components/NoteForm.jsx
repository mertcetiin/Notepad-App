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
            <input type='text' value={title} placeholder='Title' onChange={(e) => e.target.value} />
            <textarea placeholder='Write Here...' value={content} onChange={(e) => e.target.value} />
            <button type='submit'>Add</button>
        </form>
    )
}

export default NoteForm;