import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ResourceForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        if (id) {
            axios.get(`/api/resources/${id}/`)
                .then(response => {
                    setTitle(response.data.title);
                    setContent(response.data.content);
                })
                .catch(error => {
                    console.error('There was an error fetching the resource!', error);
                });
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { title, content };

        if (id) {
            axios.put(`/api/resources/${id}/`, data)
                .then(response => {
                    console.log('Resource updated:', response.data);
                    navigate('/resources');
                })
                .catch(error => {
                    console.error('There was an error updating the resource!', error);
                });
        } else {
            axios.post('/api/resources/', data)
                .then(response => {
                    console.log('Resource created:', response.data);
                    navigate('/resources');
                })
                .catch(error => {
                    console.error('There was an error creating the resource!', error);
                });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>{id ? 'Edit Resource' : 'Create Resource'}</h1>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button type="submit">{id ? 'Update' : 'Create'}</button>
        </form>
    );
};

export default ResourceForm;