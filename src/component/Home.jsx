import Aos from "aos";
import "aos/dist/aos.css";
import { useLoaderData } from "react-router-dom";
import EventCard from "./EventCard";
import Banner from "./Banner";
import { useEffect } from "react";
import WhyUs from "./WhyUs";
import JoinUs from "./JoinUs";

const Home = () => {
  const eventData = useLoaderData();
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="space-y-8">
      <Banner></Banner>
      <div
        className="text-center text-4xl font-bold my-5 text-primary-focus "
        data-aos="zoom-in"
      >
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
      <WhyUs></WhyUs>
      <JoinUs></JoinUs>
    </div>
  );
};

export default Home;
