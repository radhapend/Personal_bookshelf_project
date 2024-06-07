import React, { useState, useEffect } from 'react';
import './SearchResults.css';

const SearchResults = ({ books, addToBookshelf, bookshelf }) => {
    const [addedBooks, setAddedBooks] = useState({});
    const [message, setMessage] = useState('');

    useEffect(() => {
        const initialAddedBooks = {};
        bookshelf.forEach(book => {
            initialAddedBooks[book.key] = true;
        });
        setAddedBooks(initialAddedBooks);
    }, [bookshelf]);

    const handleAddToBookshelf = (book) => {
        if (!addedBooks[book.key]) {
            setAddedBooks({ ...addedBooks, [book.key]: true });
            setMessage(`${book.title} has been added to your bookshelf.`);
            setTimeout(() => setMessage(''), 3000);
            addToBookshelf(book);
        } else {
            setMessage(`${book.title} is already in your bookshelf.`);
            setTimeout(() => setMessage(''), 3000);
        }
    };

    return (
        <div>
            {message && <div className="message">{message}</div>}
            <div className="search-results">
                {books.map((book) => (
                    <div key={book.key} className="book-card">
                        <h2>{book.title}</h2>
                        <p>Author: {book.author_name?.join(', ')}</p>
                        {addedBooks[book.key] ? (
                            <p className="added-message">This book has already been added to your bookshelf.</p>
                        ) : (
                            <button className="button" onClick={() => handleAddToBookshelf(book)}>Add to Bookshelf</button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchResults;
