import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Repository = () => {
    const { repoName } = useParams();
    const [repo, setRepo] = useState(null);

    useEffect(() => {
        const fetchRepo = async () => {
        const response = await axios.get(`https://api.github.com/repos/triplee12/${repoName}`);
        setRepo(response.data);
        };
        fetchRepo();
    }, [repoName]);

    if (!repo) return <div>Loading...</div>;

    return (
        <div>
        <h1 className="text-2xl">{repo.name}</h1>
        <p>{repo.description}</p>
        <p><strong>Stars:</strong> {repo.stargazers_count}</p>
        <p><strong>Forks:</strong> {repo.forks_count}</p>
        <p><strong>Open Issues:</strong> {repo.open_issues_count}</p>
        </div>
    );
}

export default Repository;
