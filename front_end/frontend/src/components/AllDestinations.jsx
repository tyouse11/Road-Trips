// components/AllDestinations.jsx
// This component will display all destinations. It will receive an array of destination data as props and render individual DestinationItem components for each destination

// AllDestinations.jsx
import React from 'react';
import DestinationCard from './DestinationCard';

  function AllDestinations({ destinations, direction }) {
    // Filter destinations based on direction
    const filteredDestinations = direction
      ? destinations.filter(destination => destination.direction.toLowerCase() === direction.toLowerCase()) : destinations;
      
      return (
        <div>
          <h2>{direction ? `${direction} Destinations` : 'All Destinations'}</h2>
          <div className="destinations-container">
            {filteredDestinations.map(destination => (
              <DestinationCard key={destination._id} destination={destination} />
            ))}
          </div>
        </div>
      );
    }

export default AllDestinations;
