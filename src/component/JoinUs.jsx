import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const JoinUs = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="space-y-5" data-aos="flip-down">
      <h2 className="font-bold text-center text-3xl text-primary-focus">
        Join Us in the GameOn Experience
      </h2>
      <p className="text-[#403175] font-semibold text-xl">
        Whether you are an esports team, a tech startup, or a gaming enthusiast
        planning the ultimate LAN party, GameOn Gala is your trusted partner.
        Lets collaborate, innovate, and create unforgettable moments together.
        Welcome to the GameOn experience.
      </p>
      <p className="text-[#403175] font-semibold text-xl">
        Get in touch with us today, and lets start planning your next tech and
        gaming adventure!
      </p>
    </div>
  );
};

export default JoinUs;
