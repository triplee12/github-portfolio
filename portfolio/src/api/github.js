// src/api/github.js
import axios from 'axios';

const API_URL = 'https://api.github.com';
const TOKEN = 'YOUR_GITHUB_PERSONAL_ACCESS_TOKEN';

export const createRepo = async (repoName, description) => {
    const response = await axios.post(
        `${API_URL}/user/repos`,
        { name: repoName, description },
        {
        headers: {
            Authorization: `token ${TOKEN}`,
        },
        }
    );
    return response.data;
};

export const updateRepo = async (repoName, updates) => {
    const response = await axios.patch(
        `${API_URL}/repos/triplee12/${repoName}`,
        updates,
        {
        headers: {
            Authorization: `token ${TOKEN}`,
        },
        }
    );
    return response.data;
};

export const deleteRepo = async (repoName) => {
    await axios.delete(
        `${API_URL}/repos/triplee12/${repoName}`,
        {
        headers: {
            Authorization: `token ${TOKEN}`,
        },
        }
    );
};
