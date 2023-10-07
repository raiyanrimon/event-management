import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams();
  const serviceDesc = useLoaderData();
  const desc = serviceDesc.find((desc) => desc.id === id);
  return (
    <div className="space-y-5 mt-5 mb-10">
      <h2 className="text-5xl font-bold text-center">{desc.name}</h2>
      <img src={desc.image_url} alt="" />
      <p className="font-semibold text-2xl text-center text-primary-focus">
        Price: {desc.price}
      </p>
      <p className="text-xl font-medium">{desc.details}</p>
    </div>
  );
};

export default ServiceDetails;
