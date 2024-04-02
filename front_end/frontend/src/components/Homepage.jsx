// components/Homepage.jsx

export default function Homepage() {
    return (
      <div className="homepage-container">
      <div className="welcome-section">
        <h1>Road Trips</h1>
        <p>The open road can be a fun and exciting place. Fill your gas tank and play your next adventure now!</p>
        <p>Where Do You Want To Go Today?</p>
        <div className="search-bar">
          <input type="search" placeholder="Search destinations..." />
          <button type="submit">Search</button>
        </div>
      </div>
      <div className="about-section">
        <h2>About Us</h2>
        <p>Puppy Lovers is a family-owned business dedicated to connecting loving families with healthy and happy puppies. With our wide selection of breeds, we're sure to have the perfect furry friend for you!</p>
      </div>
      <div className="contact-section">
        <h2>Contact Us</h2>
        <p>Have questions or want to visit us in person? Reach out to our team for assistance!</p>
        <button className="contact-button">Contact</button>
      </div>
    </div>
  );
};