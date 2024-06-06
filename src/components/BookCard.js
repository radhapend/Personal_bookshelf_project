import React from 'react';
import './BookCard.css';

const BookCard = ({ book, addToBookshelf }) => {
    return (
        <div className="book-card">
            <h3>{book.title}</h3>
            <p>Edition Count: {book.edition_count}</p>
            {addToBookshelf && (
                <button onClick={() => addToBookshelf(book)}>Add to Bookshelf</button>
            )}
        </div>
    );
};

export default BookCard;
