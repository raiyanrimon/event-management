import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const EventCard = ({ event }) => {
  const { name, price, short_description, image_url, id } = event;
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="card  bg-base-100 shadow-xl" data-aos="flip-up">
      <figure className="h-64">
        <img src={image_url} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{name}</h2>
        <p>{short_description}</p>
        <p className="font-semibold">Price: {price}</p>
        <div className="card-actions mt-2">
          <Link to={`/event/${id}`}>
            <button className="btn btn-primary">Explore More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
EventCard.propTypes = {
  event: PropTypes.object,
};
export default EventCard;
