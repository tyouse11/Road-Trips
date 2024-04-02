// components/Navigation.jsx

import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src="/src/images/rtlogo.webp" alt="Logo" className='logo' />
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/AllDestinations">All</Link>
        </li>
        <li> 
          <Link to="/North">North</Link>
        </li>
        <li>
          <Link to="/East">East</Link>
        </li>
        <li>
          <Link to="/South">South</Link>
        </li>
        <li>
          <Link to="/West">West</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
