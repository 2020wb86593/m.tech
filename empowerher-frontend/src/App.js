import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResourceList from './components/ResourceList';
import Homepage from './components/Homepage';
import AlertList from './components/AlertList';
import ForumPostList from './components/ForumPostList';
import MentorshipProgramList from './components/MentorshipProgramList';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import ResourceForm from './components/ResourceForm';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/resources" element={<ResourceList />} />
                <Route path="/resources/new" element={<ResourceForm />} />
                <Route path="/resources/:id/edit" element={<ResourceForm />} />
                <Route path="/alerts" element={<AlertList />} />
                <Route path="/forum-posts" element={<ForumPostList />} />
                <Route path="/mentorship-programs" element={<MentorshipProgramList />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
};

export default App;