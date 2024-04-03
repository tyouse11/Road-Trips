// /utilities/mapUtils.jsx

const generateMapUrl = (latitude, longitude) => {
    const apiKey = 'apiKey'; // Your Google Maps API key
    const size = '400x300'; // Size of the map image
    const zoom = 11; // Zoom level
    const marker = `markers=color:red%7Clabel:A%7C${latitude},${longitude}`; // Add a marker at the destination's coordinates
  
    // Construct the map URL with parameters
    const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=${zoom}&size=${size}&${marker}&key=${apiKey}`;
  
    return mapUrl;
  };

  export default generateMapUrl;
