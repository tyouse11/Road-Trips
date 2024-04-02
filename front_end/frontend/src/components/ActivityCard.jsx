// This component will display information about a single activity.
// components/ActivityCard.jsx

function ActivityCard({ activity }) {
  const { name, description, website } = activity;

  const handleClick = () => {
    // Redirect to the website URL when the card is clicked
    window.open(website, '_blank')
  }

  return (
    <div className="activity-card" onClick={handleClick}>
        <h3>{name}</h3>
        <p>{description}</p>
        {/* Add more activity details or styling as needed */}
    </div>
  );
}

export default ActivityCard;