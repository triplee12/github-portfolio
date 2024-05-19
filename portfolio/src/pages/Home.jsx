import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [repos, setRepos] = useState([]);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchRepos = async () => {
        const response = await axios.get(`https://api.github.com/users/triplee12/repos`, {
            params: { page, per_page: 10 }
        });
        setRepos(response.data);
        };
        fetchRepos();
    }, [page]);

    const filteredRepos = repos.filter(repo =>
        repo.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
        <input
            type="text"
            placeholder="Search Repositories"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="border p-2 mb-4"
        />
        <ul>
            {filteredRepos.map(repo => (
            <li key={repo.id}>
                <Link to={`/repo/${repo.name}`} className="text-blue-500">
                {repo.name}
                </Link>
            </li>
            ))}
        </ul>
        <div className="mt-4">
            <button onClick={() => setPage(page => page - 1)} disabled={page === 1}>
            Previous
            </button>
            <button onClick={() => setPage(page => page + 1)} className="ml-2">
            Next
            </button>
        </div>
        </div>
    );
}

export default Home;
