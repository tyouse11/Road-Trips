// This component will display information about a single destination.
// components/DestinationCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import generateMapUrl from '../utilities/mapUtils'; // Import the map URL generation function

function DestinationCard({ destination }) {
  const { name, description, image, distance, duration, coordinates } = destination;
  const mapUrl = generateMapUrl(coordinates[0], coordinates[1]); // Generate the map URL based on coordinates

  return (
    <Link to={`/destination/${destination._id}/activities`} className='destination-card-link' >
      <div className="destination-card" style={{ backgroundImage: `url(${image})` }}>
        <div className="destination-card-content">
          <h3 className="destination-card-title">{name}</h3>
          <p className="destination-card-description">{description}</p>
          <p className="destination-card-details">
            Distance: {distance}, Duration: {duration}
          </p>
        </div>
        {mapUrl && <img src={mapUrl} alt={`${name} Map`} className="destination-card-map" />}
      </div>
    </Link>
  );
}

export default DestinationCard;