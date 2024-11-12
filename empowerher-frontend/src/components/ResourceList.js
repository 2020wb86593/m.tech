import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ResourceList = () => {
    const [resources, setResources] = useState([]);

    useEffect(() => {
        axios.get('/api/resources/')
            .then(response => {
                setResources(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the resources!', error);
            });
    }, []);

    return (
        <div>
            <h1>Resources</h1>
            <Link to="/resources/new">Create New Resource</Link>
            <ul>
                {resources.map(resource => (
                    <li key={resource.id}>
                        {resource.title}
                        <Link to={`/resources/${resource.id}/edit`}>Edit</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ResourceList;