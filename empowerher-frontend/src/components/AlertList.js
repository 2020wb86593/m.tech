import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AlertList = () => {
    const [alerts, setAlerts] = useState([]);

    useEffect(() => {
        axios.get('/api/alerts/')
            .then(response => {
                setAlerts(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the alerts!', error);
            });
    }, []);

    return (
        <div>
            <h1>Alerts</h1>
            <ul>
                {alerts.map(alert => (
                    <li key={alert.id}>{alert.message}</li>
                ))}
            </ul>
        </div>
    );
};

export default AlertList;