import React from "react";
import { Link } from "react-router-dom";

const NavbarComponent = ({ logo, title, setActiveLink, underline }) => {
  return (
    <div className="">
      <div className="flex align-canter items-center">
        {/* desktop nav */}
        <div className="md:flex text-transform: uppercase justify-between mt-[5rem] lg:px-20 2xl:p-20">
          <ul className="p-4">
            <li className="mb-5" onClick={() => setActiveLink("about")}>
              <p
                to="/"
                className={` text-white hover:text-slate-200 text-3xl underline-offset-8 cursor-pointer tracking-widest ${
                  underline === "about" ? "underline" : "no-underline"
                }`}
              >
                ABOUT PHBC
              </p>
            </li>
            <li className="mb-5" onClick={() => setActiveLink("mission")}>
              <Link
                to=""
                className={` text-white hover:text-slate-200 text-3xl underline-offset-8 tracking-widest ${
                  underline === "mission" ? "underline" : "no-underline"
                }`}
              >
                OUR MISSION
              </Link>
            </li>
            <li className="mb-5" onClick={() => setActiveLink("event")}>
              <Link
                to="/"
                className={` text-white hover:text-slate-200 text-3xl underline-offset-8 tracking-widest ${
                  underline === "event" ? "underline" : "no-underline"
                }`}
              >
                EVENTS
              </Link>
            </li>
            <li className="mb-16" onClick={() => setActiveLink("relations")}>
              <Link
                to="/"
                className={` text-white hover:text-slate-200 text-3xl underline-offset-8 tracking-widest ${
                  underline === "relations" ? "underline" : "no-underline"
                }`}
              >
                RELATIONS
              </Link>
            </li>
            <li className="mb-5">
              <Link
                to="/"
                className="text-white hover:text-slate-200 text-xl tracking-wider"
              >
                Research & Initiatives
              </Link>
            </li>
            <li className="mb-5">
              <Link
                to="/"
                className="text-white hover:text-slate-200 text-xl tracking-wider"
              >
                News
              </Link>
            </li>
            <li className="mb-5">
              <Link
                to="/"
                className="text-white hover:text-slate-200 text-xl tracking-wider"
              >
                Materials
              </Link>
            </li>
            <li className="mb-5">
              <Link
                to="/"
                className="text-white hover:text-slate-200 text-xl tracking-wider"
              >
                Team
              </Link>
            </li>
            <li className="mb-5">
              <Link
                to="/"
                className="text-white hover:text-slate-200 text-xl tracking-wider"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="w-3/12">
            <Link className="" href="/">
              <img
                src={logo}
                height={logo}
                width={logo}
                alt="broken"
                priority={true}
                className="w-65"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="float-right 2xl:pr-[10rem] lg:pr-[5rem] lg:pb-10">
        <h1 class="2xl:text-6xl lg:text-6xl text-white tracking-wider font-serif	font-family: ui-serif, Georgia, Cambria, ">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default NavbarComponent;
