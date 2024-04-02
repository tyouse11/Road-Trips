// components/GoogleMap.jsx

// GoogleMap.js

import React, { useState, useEffect } from 'react';

const GoogleMap = () => {
  const [markerPosition, setMarkerPosition] = useState(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    // Initialize map
    const googleMap = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 39.1776, lng: -76.668526 }, // Default center coordinates 
      zoom: 7, //Default zoom level
    });
    setMap(googleMap);

    // Add click event listener to the map
    googleMap.addListener('click', (e) => {
      setMarkerPosition({ lat: e.latLng.lat(), lng: e.latLng.lng() });
    });
  }, []);

  useEffect(() => {
    // Move map center to the selected marker position when marker position changes
    if (markerPosition && map) {
      map.setCenter(markerPosition);
    }
  }, [markerPosition, map]);

  return (
    <div id="map" style={{ height: '400px', width: '100%' }}>
      {markerPosition && (
        <Marker position={markerPosition} />
      )}
    </div>
  );
};

const Marker = ({ position }) => {
  return new window.google.maps.Marker({
    position,
  });
};

export default GoogleMap;
