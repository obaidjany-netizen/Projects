import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import "./nav.css";
import "remixicon/fonts/remixicon.css";

const NavBar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    
  
  ];

  const [Theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const [navOpen, setNavOpen] = useState(false);

  // Toggle Theme
  const themeChanger = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // Apply Theme to root and store in localStorage
  useEffect(() => {
    const root = document.documentElement;

    if (Theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", Theme);
  }, [Theme]);

  // Toggle mobile nav
  const navToggler = () => {
    setNavOpen((prev) => !prev);
  };

  return (
    <div className=" relative w-full p-0 text-2xl z-4">
      {/* TOP NAV */}
      <ul className=" relative flex flex-col xl:flex-row justify-end xl:items-center text-black dark:text-white gap-10 p-4">
        {/* Desktop Links */}
        <li className="hidden xl:flex  gap-4">
          {navItems.map((e, idx) => (
            <Link
              className="text-base font-semibold m-6 group relative w-max text-black dark:text-cyan-500   transition-all duration-300 ease-in-out "
              key={idx}
              to={e.path}
            >
              <span className="px-1 relative z-10 group-hover:text-cyan-500">
                {e.name}
              </span>
              <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-cyan-600 group-hover:w-3/6"></span>
              <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-cyan-600 group-hover:w-3/6"></span>
            </Link>
          ))}
        </li>

        {/* Mobile Icon */}
        <li
          className="block absolute right-0 top-0 text-black dark:text-white xl:hidden text-2xl"
          onClick={navToggler}
        >
          {navOpen ? (
            <i className="ri-close-large-line"></i>
          ) : (
            <i className="ri-menu-3-line"></i>
          )}
        </li>
      </ul>

      {/* MOBILE NAV */}
      {navOpen && (
        <ul
          className=" mobileNav
        screen absolute top-16 -right-10 xl:hidden bg-white dark:bg-black p-10 text-black dark:text-white flex flex-col gap-4 h-screen"
        >
          {navItems.map((e, idx) => (
            <Link
              className="shadow-lg hover:shadow-cyan-500/50 hover:text-cyan-500 px-10 py-7 rounded-3xl text-4xl
               hover:bg-black dark:hover:bg-white   transition-all duration-300 ease-in-out "
              key={idx}
              to={e.path}
              onClick={() => setNavOpen(false)}
            >
              {e.name}
            </Link>
          ))}

          <button
            onClick={themeChanger}
            className="hidden px-3 py-1 border dark:border-white border-black rounded"
          >
            {Theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
