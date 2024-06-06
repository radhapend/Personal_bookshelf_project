import React from 'react';
import './SearchResults.css';

const SearchResults = ({ books, addToBookshelf }) => {
    return (
        <div className="search-results">
            {books.map((book) => (
                <div key={book.key} className="book-card">
                    <h2>{book.title}</h2>
                    <p>Author: {book.author_name?.join(', ')}</p>
                    <button className="button" onClick={() => addToBookshelf(book)}>Add to Bookshelf</button>
                </div>
            ))}
        </div>
    );
};

export default SearchResults;
