// App.jsx

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import './App.css'
import Header from './components/Header';
import Navigation from './components/Navigation';
import Homepage from './components/Homepage';
import AboutPage from './components/AboutPage';
import GoogleMap from './components/GoogleMap';
import AllDestinations from './components/AllDestinations';
import Activities from './components/Activities';
import Footer from './components/Footer';

export default function App() {
  // Define a state variable to store the fetched data
  // declares a state variable named 'data', which holds the fetched data from the backend, initially set to 'null'
  const [destinations, setDestinations] = useState([]);

  // Use the useEffect hook to perform side effects (like fetching data)
  useEffect(() => {
    // method makes an HTTP GET request to the specified backend URL 
    axios.get('http://localhost:3000/destinations')
      // promise...if the request is successful 'then' the recieved data is stored in the state variable 'data'
      .then(response => {
        setDestinations(response.data.destinations);
      })
      // if there's an error 'catch' it is logged to the console
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [])

  return (

      <div>
        <Header />
        <Navigation />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path ="/AllDestinations" element={<AllDestinations destinations ={destinations} /> } />
            <Route path="/destination/:destinationId/activities" element={<Activities />} />
            <Route path="/North" element={<AllDestinations destinations={destinations} direction="North" />} />
            <Route path="/East" element={<AllDestinations destinations={destinations} direction="East" />} />
            <Route path="/South" element={<AllDestinations destinations={destinations} direction="South" />} />
            <Route path="/West" element={<AllDestinations destinations={destinations} direction="West" />} />
          </Routes>
          <GoogleMap />
        <Footer />
      </div>
  );
}

