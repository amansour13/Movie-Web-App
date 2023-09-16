import './RatingBar.scss';

const RatingBar = ({ rating }) => {
    const ratingPercentage = (rating / 10) * 100;
    const barStyle = {
      width: `${ratingPercentage}%`,
    };
  
    return (
      <div className="rating-bar">
        <div className="rating-bar-inner" style={barStyle}>{rating}/10</div>
      </div>
    );
  };

  export default RatingBar;