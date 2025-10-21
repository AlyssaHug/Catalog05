import "./App.css";
import Button from "./components/Buttons";
import Footer from "./components/Footer";
import Book from "./components/Card";
import books from "../data/books.json";
import Header from "./components/Header";
import { useState } from "react";

function App() {
    const [books, setBooks] = useState([]);
    const [selectedBookId, setSelectedBookId] = useState(null);
    return (
        <main>
            <Header />
            <div className='content'>
                <Button
                    books={books}
                    setBooks={setBooks}
                    selectedBookId={selectedBookId}
                />
                <div className='books'>
                    {books.map((book) => (
                        <Book
                            key={book.id}
                            book={book}
                            selectedBookId={selectedBookId}
                            setSelectedBookId={setSelectedBookId}
                        />
                    ))}
                </div>
            </div>
            <Footer text='Alyssa Huggins, 2025'></Footer>
        </main>
    );
}

export default App;
