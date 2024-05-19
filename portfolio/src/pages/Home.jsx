import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import RepoModal from '../components/RepoModal';

const Home = () => {
    const [repos, setRepos] = useState([]);
    const [filteredRepos, setFilteredRepos] = useState([]);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRepo, setSelectedRepo] = useState(null);

    const fetchRepos = useCallback(async () => {
        try {
        const response = await axios.get(`https://api.github.com/users/triplee12/repos`, {
            params: { per_page: 100 }
        });
        setRepos(response.data);
        setFilteredRepos(response.data);
        } catch (error) {
        console.error('Error fetching repositories', error);
        }
    }, []);

    useEffect(() => {
        fetchRepos();
    }, [fetchRepos]);

    useEffect(() => {
        if (search) {
        setFilteredRepos(
            repos.filter(repo =>
            repo.name.toLowerCase().includes(search.toLowerCase())
            )
        );
        } else {
        setFilteredRepos(repos);
        }
    }, [search, repos]);

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div className="container mx-auto p-4">
        <input
            type="text"
            placeholder="Search Repositories"
            value={search}
            onChange={handleSearchChange}
            className="border p-2 mb-4 w-full"
        />
        <button
            className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
            onClick={() => { setSelectedRepo(null); setIsModalOpen(true); }}
        >
            Create New Repository
        </button>
        <ul className="list-disc pl-5">
            {filteredRepos.slice((page - 1) * 10, page * 10).map(repo => (
            <li key={repo.id} className="mb-2">
                <div className="flex justify-between items-center">
                <Link to={`/repo/${repo.name}`} className="text-blue-500 hover:underline">
                    {repo.name}
                </Link>
                <button
                    className="bg-yellow-500 text-white px-4 py-1 rounded"
                    onClick={() => { setSelectedRepo(repo); setIsModalOpen(true); }}
                >
                    Edit
                </button>
                </div>
            </li>
            ))}
        </ul>
        <div className="mt-4 flex justify-between">
            <button
            className="bg-gray-500 text-white px-4 py-2 rounded"
            onClick={() => setPage(page => page - 1)}
            disabled={page === 1}
            >
            Previous
            </button>
            <button
            className="bg-gray-500 text-white px-4 py-2 rounded"
            onClick={() => setPage(page => page + 1)}
            disabled={page * 10 >= filteredRepos.length}
            >
            Next
            </button>
        </div>
        <RepoModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            repo={selectedRepo}
            refreshRepos={fetchRepos}
        />
        </div>
    );
}

export default Home;
