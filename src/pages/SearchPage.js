import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import './SearchPage.css';

const SearchPage = () => {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);
    const [bookshelf, setBookshelf] = useState(() => {
        return JSON.parse(localStorage.getItem('bookshelf')) || [];
    });

    useEffect(() => {
        if (query) {
            axios.get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`)
                .then((response) => {
                    setBooks(response.data.docs);
                });
        }
    }, [query]);

    const addToBookshelf = (book) => {
        const newBookshelf = [...bookshelf, book];
        setBookshelf(newBookshelf);
        localStorage.setItem('bookshelf', JSON.stringify(newBookshelf));
    };

    return (
        <div className="container">
            <h1>Book Search</h1>
            <div className="search-bar-container">
                <SearchBar query={query} setQuery={setQuery} />
                <button className="button" onClick={() => window.location.href = '/bookshelf'}>My Bookshelf</button>
            </div>
            <SearchResults books={books} addToBookshelf={addToBookshelf} />
        </div>
    );
};

export default SearchPage;
