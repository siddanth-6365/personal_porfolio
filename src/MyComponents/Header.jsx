import React from "react";
import "flowbite";
import { useState, useEffect } from "react";

const Header = () => {
  // const [navbar, setNavbar] = useState(
  //   "bg-white fixed  bottom-0  w-full z-20 shadow-2xl left-0"
  // );

  // useEffect(() => {
  //   changeBackground();
  //   window.addEventListener("scroll", changeBackground);
  // });
  // const changeBackground = () => {
  //   console.log(window.scrollY);
  //   if (window.scrollY >= 60) {
  //     setNavbar("bg-white fixed text-black  top-0  w-full z-20 shadow-2xl left-0");
  //   } else {
  //     setNavbar("   fixed  top-0  w-full z-20 shadow-2xl left-0");
  //   }
  // };

  const [show, setShow] = useState(false);
  const [navclass, setnavclass] = useState(
    "max-w-screen  backdrop-filter backdrop-blur-lg     fixed text-black  top-0  w-full z-20 shadow-lg left-0  flex flex-wrap items-center justify-between mx-auto p-5"
  );
  const [lastScrollY, setLastScrollY] = useState(true);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(true);
        setnavclass(
          "w-screen backdrop-filter backdrop-blur-lg   fixed text-black  top-0  w-full z-20 shadow-lg left-0  flex flex-wrap items-center justify-between mx-auto p-5"
        );
      } else {
        // if scroll up show the navbar
        setShow(false);
        setnavclass(
          "w-screen bg-gray-100    fixed text-black  top-0  w-full z-20 shadow-lg left-0  flex flex-wrap items-center justify-between mx-auto p-4"
        );
      }
      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };
  const checknavbar = () => {
    if (window.scrollY === 0) {
      setnavclass(
        "w-screen  backdrop-filter backdrop-blur-lg  fixed text-black  top-0  w-full z-20 shadow-lg left-0  flex flex-wrap items-center justify-between mx-auto p-4"
      );
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      checknavbar();
      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <>
      {/* <nav className={navbar}> */}
      <div id="navbar" className={`active ${show && "hidden"}`}>
        <div className={navclass}>
          <a href="#" className="flex items-center">
            <img
              class="w-10 h-10 p-1 mr-3 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
              src="https://media.licdn.com/dms/image/D5603AQGYQoVDjRxcew/profile-displayphoto-shrink_800_800/0/1675652136606?e=1687392000&v=beta&t=UaXHCAGEz_pzXPK14NOLg3Ug3iW0I3uTRz7nM7q3Juw"
              alt="Bordered avatar"
            />

            <span className="logo-name self-center text-2xl md:text-xl font-semibold whitespace-nowrap text-blue-700 dark:text-white">
              <span> &lt;</span>
              Siddanth Reddy
              <span>/&gt; </span>
            </span>
          </a>
          <div className="flex md:order-2">
            <button
              type="button"
              className="pushable text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <span class="front">
                {" "}
                <a
                  href="https://drive.google.com/file/d/1pe4AuC5jLmBRrsi_f-wb7-d_0ndfSgVm/view?usp=drivesdk"
                  target="_blank"
                >
                  {" "}
                  Resume{" "}
                </a>{" "}
              </span>
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only ">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="header-items items-center bg-black justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  ">
              <li>
                <a
                  href="# "
                  className="block py-2 pl-3 pr-4 text-blue-700 rounded  md:text-blue-700 md:p-0 "
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about-div"
                  className="block py-2 pl-3 pr-4 text-gray-400 rounded  md:hover:text-blue-700 md:p-0  "
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#project-area"
                  className="block py-2 pl-3 pr-4 text-gray-400 rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 "
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#message-form"
                  className="block py-2 pl-3 pr-4 text-gray-400 rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white "
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
