import { Link, useNavigate } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const googleLogin = () => {
    googleSignIn()
      .then(() => {
        toast.success("Logged in successfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch();
  };
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);
    const passwordValidation =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#]).{6,}$/;
    if (!passwordValidation.test(password)) {
      return toast.warn(
        "Password should contain more than 6 characters & capital letter & special character"
      );
    } else {
      createUser(email, password)
        .then(async (user) => {
          toast.success("User created successfully");
          navigate(location?.state ? location.state : "/");
          await updateProfile(user.user, {
            displayName: name,
            photoURL: photo,
          });
        })
        .catch((error) => console.error(error));
    }
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center my-5 ">
          <h1 className="text-6xl font-bold">Register now</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body md:w-96">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Your Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-2">
              <button className="btn btn-primary">Sign Up</button>
            </div>
            <p onClick={googleLogin} className="w-full btn text-red-500">
              <BsGoogle className="text-xl mr-1"></BsGoogle>Login with Google
            </p>
            <p>
              Have account?
              <Link to="/login">
                <button className="text-primary ml-2">Login</button>
              </Link>
            </p>
          </form>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Register;
