import { Link, NavLink } from "react-router-dom";
import logo from "/assets/2.logo.svg";
import { useContext } from "react";
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

  // darkmode
  const handleThemeChange = (e) => {
    const theme = e.target.checked ? "aqua" : "light";
    document.documentElement.setAttribute("data-theme", theme);
  };
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
          <div className="pr-4">
            <div>
              <label>
                <input
                  type="checkbox"
                  value="aqua"
                  className="toggle theme-controller"
                  onChange={handleThemeChange}
                />
              </label>
            </div>
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
