import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MentorshipProgramList = () => {
    const [programs, setPrograms] = useState([]);

    useEffect(() => {
        axios.get('/api/mentorship-programs/')
            .then(response => {
                setPrograms(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the mentorship programs!', error);
            });
    }, []);

    return (
        <div>
            <h1>Mentorship Programs</h1>
            <ul>
                {programs.map(program => (
                    <li key={program.id}>{program.description}</li>
                ))}
            </ul>
        </div>
    );
};

export default MentorshipProgramList;