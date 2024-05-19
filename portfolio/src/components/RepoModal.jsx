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
        <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Repository Modal">
        <h2>{repo ? 'Update Repository' : 'Create Repository'}</h2>
        <form onSubmit={(e) => { e.preventDefault(); handleCreateOrUpdate(); }}>
            <label>
            Repository Name:
            <input
                type="text"
                value={repoName}
                onChange={(e) => setRepoName(e.target.value)}
                required
            />
            </label>
            <label>
            Description:
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            </label>
            <button type="submit">{repo ? 'Update' : 'Create'}</button>
        </form>
        {repo && <button onClick={handleDelete} style={{ color: 'red' }}>Delete</button>}
        <button onClick={onClose}>Close</button>
        </Modal>
    );
};

export default RepoModal;
