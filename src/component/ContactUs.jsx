import {
  GrMailOption,
  GrFacebook,
  GrPinterest,
  GrTwitter,
  GrInstagram,
} from "react-icons/gr";

const ContactUs = () => {
  return (
    <div className="max-w-xl mx-auto space-y-10">
      <h1 className="text-4xl font-extrabold text-center">Details</h1>
      <p className="flex font-bold">
        <GrMailOption className="mr-2 font-bold text-2xl"></GrMailOption>
        info@gameongala.com
      </p>
      <p className="flex font-bold">
        <GrFacebook className="mr-2 font-bold text-2xl text-blue-500"></GrFacebook>{" "}
        GameOnGala
      </p>
      <p className="flex font-bold">
        <GrPinterest className="mr-2 font-bold text-2xl text-red-700"></GrPinterest>
        GameOnGala
      </p>
      <p className="flex font-bold">
        <GrTwitter className="mr-2 font-bold text-2xl text-blue-700"></GrTwitter>
        GameOnGala
      </p>
      <p className="flex font-bold">
        <GrInstagram className="mr-2 font-bold text-2xl text-red-700"></GrInstagram>
        GameOnGala
      </p>
    </div>
  );
};

export default ContactUs;
