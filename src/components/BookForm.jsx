import { nanoid } from "nanoid";

function BookForm({ addBook, closeModal }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const newBook = {
            id: nanoid(),
            title: data.get("title"),
            publisher: data.get("publisher"),
            image: data.get("image"),
        };
        addBook(newBook);
        e.target.reset();
        closeModal();
    };

    return (
        <div className='form-container'>
            <h2 className='formtitle'>Add a new book!</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='title'>Title:</label>
                    <input
                        type='text'
                        name='title'
                        placeholder='book title'
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='author'>Author:</label>
                    <input
                        type='text'
                        name='author'
                        placeholder='author'
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='publisher'>Publisher:</label>
                    <input
                        type='text'
                        name='publisher'
                        placeholder='publisher'
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='publicationYear'>Publication Year:</label>
                    <input
                        type='number'
                        name='publicationYear'
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='language'>Language:</label>
                    <input
                        type='text'
                        name='language'
                        placeholder='language'
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='pages'>Pages:</label>
                    <input
                        type='number'
                        name='pages'
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='image'>Image URL:</label>
                    <input
                        type='url'
                        name='image'
                        placeholder='image URL'
                    />
                </div>
                <button
                    className='save'
                    type='submit'>
                    Save
                </button>
            </form>
        </div>
    );
}

export default BookForm;
