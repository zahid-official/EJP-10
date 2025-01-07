import { Link, NavLink } from "react-router-dom";
import logo from "/assets/2.logo.svg";
import { useContext, useEffect } from "react";
import ContextAPI from "./Auth/ContextAPI";
import { toast } from "react-toastify";

const Navbar = () => {
  // useContext
  const { users, logout } = useContext(ContextAPI);

  // handleSignOut
  const handleSignOut = () => {
    logout()
      .then(() => {
        toast.success("Sign Out Successfully");
      })
      .catch((error) => toast.error(error.message));
  };

  const links = (
    <>
      <li className="text-lg font-bold custom-effect-nav">
        <NavLink to={"/"} className={"z-10 hover:text-white"}>
          <span>Home</span>
        </NavLink>
      </li>
      <li className="text-lg font-bold custom-effect-nav">
        <NavLink to={"/allVisas"} className={"z-10 hover:text-white"}>
          <span>All Visas</span>
        </NavLink>
      </li>

      {users?.email && (
        <>
          <li className="text-lg font-bold custom-effect-nav">
            <NavLink to={"/addVisa"} className={"z-10 hover:text-white"}>
              <span>Add Visa</span>
            </NavLink>
          </li>
          <li className="text-lg font-bold custom-effect-nav">
            <NavLink to={"/myVisas"} className={"z-10 hover:text-white"}>
              <span>My Visas</span>
            </NavLink>
          </li>
          <li className="text-lg font-bold custom-effect-nav">
            <NavLink to={"/myApplications"} className={"z-10 hover:text-white"}>
              <span>My Applications</span>
            </NavLink>
          </li>
        </>
      )}

      {users?.email ? (
        ""
      ) : (
        <>
          <div className="divider divider-start sm:hidden m-0"></div>
          <li className="text-lg font-bold sm:hidden custom-effect-nav">
            <NavLink to={"/login"} className={"z-10 hover:text-white"}>
              <span>Sign In</span>
            </NavLink>
          </li>
          <li className="text-lg font-bold sm:hidden custom-effect-nav">
            <NavLink to={"/register"} className={"z-10 hover:text-white"}>
              <span>Sign Up</span>
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  // handleDarkMode
  const handleDarkMode = () => {
    const darkMode = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  };
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    theme === "dark" && document.documentElement.classList.add("dark");
  }, []);

  return (
    <>
      <div className="navbar sm:w-10/12 mx-auto py-6 px-3">
        <div className="navbar-start">
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className="navbar-center hidden xl:flex">
          <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
        </div>

        <div className="navbar-end gap-2">
          {/* darkmode */}
          <div className="mr-2 flex items-center">
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                className="theme-controller"
                value="synthwave"
                onClick={handleDarkMode}
              />

              {/* sun icon */}
              <svg
                className="swap-off h-8 w-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on h-8 w-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>

          {users?.email ? (
            <div className="relative rounded-full profilePhoto">
              <img
                src={`${users?.photoURL}`}
                alt="profile photo"
                className="h-12 w-12 rounded-[50%] cursor-pointer object-cover"
              />

              <ul className="border z-30 bg-white hidden absolute w-44 text-center -right-14 top-[98%] px-2 py-5 rounded-xl text-base font-bold space-y-3">
                <li className="px-3 border-b pb-4">{users?.displayName}</li>
                <li className="px-3">
                  <button
                    onClick={handleSignOut}
                    className="btn w-full mt-2 hover:bg-[#45a735] text-base font-bold custom-effect"
                  >
                    <span className="z-10">Sign Out</span>
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="sm:flex gap-2.5 hidden">
              <Link to={"/login"}>
                <button className="btn hover:bg-[#45a735] text-lg font-bold custom-effect">
                  <span className="z-10">Sign In</span>
                </button>
              </Link>

              <Link to={"/register"}>
                <button className="btn hover:bg-[#45a735] text-lg font-bold custom-effect">
                  <span className="z-10">Sign Up</span>
                </button>
              </Link>
            </div>
          )}

          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost xl:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
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
            </div>

            <ul
              tabIndex={0}
              className="z-20 right-2 py-4 menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow gap-2"
            >
              {links}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
