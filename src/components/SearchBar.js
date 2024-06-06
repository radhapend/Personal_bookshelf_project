import React from 'react';
import './SearchBar.css';

const SearchBar = ({ query, setQuery }) => {
    return (
        <div className="search-bar">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for books..."
            />
        </div>
    );
};

export default SearchBar;
