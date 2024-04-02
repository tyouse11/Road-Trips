// components/Activities.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ActivityCard from './ActivityCard';

function Activities() {
  const { destinationId } = useParams(); // Get destinationId from URL params
  const [destinationName, setDestinationName] = useState('');
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // Fetch activities for the specific destination
    axios.get(`http://localhost:3000/activities/${destinationId}/`)
      .then(response => {
        setActivities(response.data.activities);
      })
      .catch(error => {
        console.error('Error fetching activities:', error);
      });

    // Fetch destination details to get the name
    axios.get(`http://localhost:3000/destinations/${destinationId}`)
      .then(response => {
        setDestinationName(response.data.data.name);
      })
      .catch(error => {
        console.error('Error fetching destination:', error);
      });
  }, [destinationId]); // Make sure to re-fetch activities when destinationId changes

  return (
    <div>
      <h2>Activities for {destinationName}</h2>
      <div className="activity-cards">
        {activities.map(activity => (
          <ActivityCard key={activity._id} activity={activity} />
        ))}
      </div>
    </div>
  );
}

export default Activities;

