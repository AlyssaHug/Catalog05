import Modal from "./Modal";
import BookForm from "./BookForm";
import { nanoid } from "nanoid";

function Button({ books, setBooks, selectedBookId }) {
    function deleteBook() {
        if (selectedBookId) {
            const newBooks = books.filter((b) => b.id !== selectedBookId);
            setBooks([...newBooks]);
        }
    }

    function addBook(newBook) {
        setBooks([...books, newBook]);
    }

    return (
        <div>
            <Modal
                btnClassName='button'
                btnLabel='Add new books!'>
                <BookForm addBook={addBook} />
            </Modal>
            <div>
                <button className='edit'>Edit</button>
            </div>
            <div>
                <button
                    className='remove'
                    onClick={deleteBook}
                    disabled={!selectedBookId}>
                    <span>Delete</span>
                </button>
            </div>
        </div>
    );
}

export default Button;
