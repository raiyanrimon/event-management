import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const WhyUs = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="space-y-7">
      <h1
        className="text-primary-focus font-bold text-3xl text-center my-5"
        data-aos="zoom-in-down"
      >
        Why Choose GameOn Gala?
      </h1>
      <img
        data-aos="fade-left"
        src="https://i.ibb.co/C5JPTX6/pexels-photo-2263436.jpg"
        alt=""
      />
      <div data-aos="fade-up" className="space-y-3 ">
        <p>
          <span className="font-bold text-xl text-justify">Passion: </span>We
          are gamers and tech aficionados at heart, and we pour that passion
          into every event we plan. We understand the culture, the excitement,
          and the thrill of tech and gaming, and it shows in our work.
        </p>
        <p>
          <span className="font-bold text-xl text-justify">Expertise: </span>
          With years of experience in event planning, we know what it takes to
          make an event shine. From logistics to marketing to on-site execution,
          our team of experts has you covered.
        </p>
        <p>
          <span className="font-bold text-xl">Innovation: </span>Tech and gaming
          are all about pushing boundaries and exploring new horizons. We are
          dedicated to bringing innovation to every event we plan, whether it is
          through cutting-edge technology or creative gameplay.
        </p>
        <p>
          <span className="font-bold text-xl">Tailored Solutions: </span>We
          understand that every event is unique. Thats why we work closely with
          you to tailor our services to your specific needs and goals. Your
          vision is our priority.
        </p>
        <p>
          <span className="font-bold text-xl">Community: </span> We believe in
          the power of community in tech and gaming. Our events are designed to
          foster connections, inspire collaboration, and celebrate the
          incredible diversity within these industries.
        </p>
      </div>
    </div>
  );
};

export default WhyUs;
