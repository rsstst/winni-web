'use client';
import React, { useState } from 'react';

const Searchbar: React.FC = () => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const handleSearch = () => {
        console.log('Searching for:', query);
        // Add your search logic here
    };

    return (
        <div className="space-x-4">
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search..."
                className="outline-1 outline-white p-2 rounded focus:outline-2"
            />
            <button onClick={handleSearch} className="hover:cursor-pointer outline-1 text-white p-2 rounded">
                Search
            </button>
        </div>
    );
};

export default Searchbar;