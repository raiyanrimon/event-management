import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignOut = () => {
    logOut()
      .then(() => navigate("/"))
      .catch((error) => console.error(error));
  };
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={user.photoURL} alt={user.displayName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name:{user.displayName}</h2>
        <p>Email: {user.email}</p>
        <div className="card-actions justify-end">
          <button onClick={handleSignOut} className="btn btn-primary">
            LogOut
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
