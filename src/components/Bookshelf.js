import React from 'react';
import Bookshelf from '../components/Bookshelf';
const BookshelfPage = () => {
    const bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];

    return (
        <div className="container">
            <h1>My Bookshelf</h1>
            <Bookshelf bookshelf={bookshelf} />
            <button className="button" onClick={() => window.location.href = '/'}>Back to Search</button>
        </div>
    );
};

export default BookshelfPage;
