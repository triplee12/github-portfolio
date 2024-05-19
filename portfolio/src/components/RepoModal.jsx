import React, { useState } from 'react';
import Modal from 'react-modal';
import { createRepo, updateRepo, deleteRepo } from '../api/github';

Modal.setAppElement('#root');

const RepoModal = ({ isOpen, onClose, repo, refreshRepos }) => {
    const [repoName, setRepoName] = useState(repo ? repo.name : '');
    const [description, setDescription] = useState(repo ? repo.description : '');

    const handleCreateOrUpdate = async () => {
        if (repo) {
        await updateRepo(repo.name, { name: repoName, description });
        } else {
        await createRepo(repoName, description);
        }
        refreshRepos();
        onClose();
    };

    const handleDelete = async () => {
        if (repo) {
        await deleteRepo(repo.name);
        refreshRepos();
        onClose();
        }
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Repository Modal" className="p-4 bg-white rounded shadow-md max-w-lg mx-auto mt-20">
        <h2 className="text-2xl mb-4">{repo ? 'Update Repository' : 'Create Repository'}</h2>
        <form onSubmit={(e) => { e.preventDefault(); handleCreateOrUpdate(); }}>
            <label className="block mb-2">
            Repository Name:
            <input
                type="text"
                value={repoName}
                onChange={(e) => setRepoName(e.target.value)}
                required
                className="border p-2 w-full mb-4"
            />
            </label>
            <label className="block mb-4">
            Description:
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border p-2 w-full"
            />
            </label>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
            {repo ? 'Update' : 'Create'}
            </button>
            {repo && (
            <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded">
                Delete
            </button>
            )}
            <button onClick={onClose} className="ml-2 text-gray-700">
            Close
            </button>
        </form>
        </Modal>
    );
};

export default RepoModal;
