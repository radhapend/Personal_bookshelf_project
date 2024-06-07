import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import LoadingComponent from '../components/LoadingComponent'; // Assuming you have a LoadingComponent
import './SearchPage.css';

const SearchPage = () => {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);
    const [bookshelf, setBookshelf] = useState(() => {
        return JSON.parse(localStorage.getItem('bookshelf')) || [];
    });
    const [loading, setLoading] = useState(false); // New loading state

    const handleSearch = () => {
        if (query) {
            setLoading(true); // Set loading to true when starting the search
            axios.get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`)
                .then((response) => {
                    setBooks(response.data.docs);
                })
                .finally(() => {
                    setLoading(false); // Set loading to false when search is complete
                });
        }
    };

    const addToBookshelf = (book) => {
        const newBookshelf = [...bookshelf, book];
        setBookshelf(newBookshelf);
        localStorage.setItem('bookshelf', JSON.stringify(newBookshelf));
    };

    return (
        <div className="container">
            <h1>Book Search</h1>
            <br></br>
            <div className="search-bar-container">
                <SearchBar query={query} setQuery={setQuery} handleSearch={handleSearch} />
                {loading && <LoadingComponent />} {/* Render loading component if loading is true */}
                {query && <h2>Search results for "{query}"</h2>}
                <SearchResults books={books} addToBookshelf={addToBookshelf} bookshelf={bookshelf} />
                <button className="button" onClick={() => window.location.href = '/bookshelf'}>My Bookshelf</button>
            </div>
        </div>
    );
};

export default SearchPage;
