import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/resources">Resources</Link></li>
                <li><Link to="/alerts">Alerts</Link></li>
                <li><Link to="/forum-posts">Forum Posts</Link></li>
                <li><Link to="/mentorship-programs">Mentorship Programs</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;