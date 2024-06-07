import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ query, setQuery, handleSearch }) => {
    const [loading, setLoading] = useState(false);

    const handleKeyDown = async (e) => {
        if (e.key === 'Enter') {
            setLoading(true);
            await handleSearch();
            setLoading(false);
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search for books..."
            />
            {loading && <div className="loading-animation">Loading...</div>}
        </div>
    );
};

export default SearchBar;
