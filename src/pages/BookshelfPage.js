import React, { useState, useEffect } from 'react';
import BookCard from '../components/BookCard';
import './BookshelfPage.css';

const BookshelfPage = () => {
    const [bookshelf, setBookshelf] = useState([]);

    useEffect(() => {
        const savedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
        setBookshelf(savedBookshelf);
    }, []);

    return (
        <div className="container">
            <h1>My Bookshelf</h1>
            <div className="bookshelf">
                {bookshelf.length > 0 ? (
                    bookshelf.map((book, index) => (
                        <BookCard key={index} book={book} />
                    ))
                ) : (
                    <p>No books in the bookshelf.</p>
                )}
            </div>
            <button className="button" onClick={() => window.location.href = '/'}>Back to Search</button>
        </div>
    );
};

export default BookshelfPage;
