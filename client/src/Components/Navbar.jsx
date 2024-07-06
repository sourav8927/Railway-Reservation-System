import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { useAuth } from "../store/Auth";
import './Navbar.css'
import Translate from "./Translate";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleIsMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { user, isLoading, token } = useAuth();
  if (token && isLoading) {
    return <h1>Loading...</h1>;
  }

  const { isLoggedIn } = useAuth();
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 bg-blue-800 top-0">
      <nav className="flex justify-between items-center py-6 text-white">
        {/* <img src="\public\images\jij_logo.webp" className='size-[50px]' alt="" /> */}
        <a href="/" className="flex items-center text-2xl">
          BookMyTrain
        </a>
        <ul className="hidden md:flex gap-12">
          <NavLink to="/">
            <li>Reserve your seat</li>
          </NavLink>
          <NavLink to="/about">
            <li>About</li>
          </NavLink>
          <NavLink to="/contact">
            <li>Contact</li>
          </NavLink>
          <NavLink to="/myticket">
            <li>My Tickets</li>
          </NavLink>
          {user?.isAdmin && (
              <NavLink className={(e) => e.isActive ? "red" : ""} to="/admin"><li>Admin Dashboard</li></NavLink>
            )}
  
        </ul>

        {/* google translater */}
        <Translate />

        {/* //login and registration and logout button  */}
        <div className="text-base font-medium space-x-5 hidden lg:block">
          {isLoggedIn ? (
            <>
              <Link
                to="/logout"
                className="py-2 px-5 border rounded text-white bg-blue-500"
              >
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" className="py-2 px-5 border rounded">
                Log in
              </Link>
              <Link
                to="/register"
                className="py-2 px-5 border rounded text-white bg-blue-500"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/*for mobile view*/}
        <div className="md:hidden block">
          <button onClick={handleIsMenuToggler}>
            {isMenuOpen ? (
              <RxCross2 className="w-5 h-5" />
            ) : (
              <FaBarsStaggered className="w-5 h-5 " />
            )}
          </button>
        </div>
      </nav>

      {/*navitems for mobile*/}
      <div
        className={`px-4 bg-black py-5 rounded-sm ${
          isMenuOpen ? "" : "hidden"
        } `}
      >
        <ul className="text-white first:text-white py-1">
          <NavLink to="/">
            <li className="py-1">Reserve your seat</li>
          </NavLink>
          <NavLink to="/about">
            <li className="py-1">About</li>
          </NavLink>
          <NavLink to="/contact">
            <li className="py-1">Contact</li>
          </NavLink>
          <NavLink to="/myticket">
            <li className="py-1">My Tickets</li>
          </NavLink>
          <div className="flex py-4 gap-2">
            <li>
              <Link to="/" className="py-2 px-5 border rounded">
                Log in
              </Link>
            </li>
            <li>
              <Link to="/" className="py-2 px-5 border rounded bg-blue-400">
                Sign up
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
