import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then(() => console.log("user logged out"))
      .catch((error) => console.error(error));
  };
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/service">Services</NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a
          className="btn btn-ghost normal-case text-primary text-2xl md:text-4xl greatVibes"
          id="logo"
        >
          GameOn Gala
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium text-primary">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div className="md:hidden w-24 ml-5">
              <h3 className="font-medium ml-5">{user.displayName}</h3>
              <img className="avatar rounded-full" src={user.photoURL} alt="" />
              <button onClick={handleSignOut} className="btn btn-primary">
                Sign Out
              </button>
            </div>
            <div className="md:flex items-center space-x-2 hidden md:visible ">
              {" "}
              <h3 className="flex items-center font-semibold text-base ">
                {" "}
                {user.displayName}
              </h3>
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </div>
              <button onClick={handleSignOut} className="btn btn-primary">
                Sign Out
              </button>
            </div>
          </>
        ) : (
          <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
