import Aos from "aos";
import "aos/dist/aos.css";
import { useLoaderData } from "react-router-dom";
import EventCard from "./EventCard";
import Banner from "./Banner";
import { useEffect } from "react";

const Home = () => {
  const eventData = useLoaderData();
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Banner></Banner>
      <div className="text-center text-4xl font-bold my-5 " data-aos="zoom-in">
        Our Services
      </div>
      <div
        className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10"
        data-aos="slide-up"
      >
        {eventData.map((event) => (
          <EventCard key={event.id} event={event}></EventCard>
        ))}
      </div>
    </>
  );
};

export default Home;
