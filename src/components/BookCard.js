import React from 'react';
import './BookCard.css';

const BookCard = ({ book, removeFromBookshelf }) => {
    return (
        <div className="book-card">
            <h3>{book.title}</h3>
            <p>Author: {book.author_name?.join(', ')}</p>
            <p>Edition Count: {book.edition_count}</p>
            {removeFromBookshelf && (
                <button className="button" onClick={() => removeFromBookshelf(book)}>Remove</button>
            )}
        </div>
    );
};

export default BookCard;
