import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "../styles/searchbar.css";

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [history, setHistory] = useState([]);
    const { query: queryParam } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async (searchQuery) => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(`https://dog.ceo/api/breed/${searchQuery.toLowerCase()}/images/random/50`);
                if (!response.ok) {
                    throw new Error('Breed not found');
                }
                const result = await response.json();
                setData(result.message);
                if (!history.includes(searchQuery)) {
                    setHistory((prevHistory) => [...prevHistory, searchQuery]);
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (queryParam) {
            fetchData(queryParam);
            setQuery(queryParam);
        }
    }, [queryParam, history]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (query) {
            navigate(`/search/${query}`);
        }
    };

    const openModal = (index) => {
        navigate(`/modal/${index}`, { state: data });
    };

    return (
        <div className={`search-container`}>
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search Dog Breed..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="search-input"
                />
                <button className="search-icon" type="submit" aria-label="Search">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="10.5" cy="10.5" r="7" />
                        <line x1="21" y1="21" x2="15.8" y2="15.8" />
                    </svg>
                </button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {/* Move Search History here */}
            {history.length > 0 && (
                <div className="search-history">
                    <h3>Search History:</h3>
                    <ul>
                        {history.map((item, index) => (
                            <li className='history' key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}

            {data.length > 0 && (
                <div className='grid'>
                    {data.map((item, index) => (
                        <div className='grid-item' key={index} onClick={() => openModal(index)}>
                            <img src={item} alt={`Dog ${index}`} style={{ width: '100%', height: 'auto', cursor: 'pointer' }} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchBar;
