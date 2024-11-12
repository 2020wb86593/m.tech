import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ForumPostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('/api/forum-posts/')
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the forum posts!', error);
            });
    }, []);

    return (
        <div>
            <h1>Forum Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default ForumPostList;