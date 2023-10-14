import PropTypes from 'prop-types';

function Card(props) {
  return (
    <section>
      <img src={props.imageUrl} alt={props.title} /> {/* Add an 'alt' attribute for the image */}
      <div className="wrapper">
        <div>
          <div>
            <div className="card--top">
              <i className="fa-solid fa-location-dot"></i>
              <span className="location">{props.location}</span>
              <a href={props.googleMapsUrl}>View on Google Maps</a>
            </div>
            <h2>{props.title}</h2>
          </div>
        </div>
        <div>
          <h3>{props.startDate} - {props.endDate}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </section>
  );
}

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  googleMapsUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
