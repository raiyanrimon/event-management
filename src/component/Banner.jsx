import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      data-aos="flip-up"
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/nrNQ7gx/photo-1505373877841-8d25f7d46678-ixlib-rb-4-0.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Bringing Your Tech and Gaming Dreams to Life
          </h1>
          <p className="mb-5">
            Your One-Stop Event Planning Company for Unforgettable Experiences
          </p>
          <Link to="/login">
            <button className="btn btn-primary">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
