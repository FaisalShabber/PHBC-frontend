import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavbarComponent = ({ logo, title, setActiveLink, underline }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={`absolute top-0 left-0 h-screen w-screen bg-white transform z-50 ${
          open ? "-translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out filter drop-shadow-md`}
      >
        <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20">
          {/*logo container*/}
          <Link className="text-xl font-semibold" href="/">
            LOGO
          </Link>
        </div>
        <div className="">
          <div className="flex align-canter items-center">
            {/* desktop nav */}
            <div className="md:flex text-transform: uppercase justify-between mt-[5rem] lg:px-20">
              <ul className="p-5">
                <li className="mb-5" onClick={() => setActiveLink("about")}>
                  <p
                    className={` text-white hover:text-slate-200 text-3xl underline-offset-8 cursor-pointer tracking-widest ${
                      underline === "about" ? "underline" : "no-underline"
                    }`}
                  >
                    ABOUT PHBC
                  </p>
                </li>
                <li className="mb-5" onClick={() => setActiveLink("mission")}>
                  <p
                    to=""
                    className={` text-white hover:text-slate-200 text-3xl underline-offset-8 cursor-pointer tracking-widest ${
                      underline === "mission" ? "underline" : "no-underline"
                    }`}
                  >
                    OUR MISSION
                  </p>
                </li>
                <li className="mb-5" onClick={() => setActiveLink("event")}>
                  <p
                    className={` text-white hover:text-slate-200 text-3xl underline-offset-8 cursor-pointer tracking-widest ${
                      underline === "event" ? "underline" : "no-underline"
                    }`}
                  >
                    EVENTS
                  </p>
                </li>
                <li
                  className="mb-16"
                  onClick={() => setActiveLink("relations")}
                >
                  <p
                    className={` text-white hover:text-slate-200 text-3xl underline-offset-8 cursor-pointer tracking-widest ${
                      underline === "relations" ? "underline" : "no-underline"
                    }`}
                  >
                    RELATIONS
                  </p>
                </li>
                <li className="mb-5">
                  <p className="text-white hover:text-slate-200 text-xl tracking-wider">
                    Research & Initiatives
                  </p>
                </li>
                <li className="mb-5">
                  <p className="text-white hover:text-slate-200 text-xl tracking-wider">
                    News
                  </p>
                </li>
                <li className="mb-5">
                  <p className="text-white hover:text-slate-200 text-xl tracking-wider">
                    Materials
                  </p>
                </li>
                <li className="mb-5" onClick={() => setActiveLink("team")}>
                  <p
                    className={` text-white hover:text-slate-200 text-xl underline-offset-8 cursor-pointer tracking-widest ${
                      underline === "team" ? "underline" : "no-underline"
                    }`}
                  >
                    Team
                  </p>
                </li>
                <li className="mb-5">
                  <p className="text-white hover:text-slate-200 text-xl tracking-wider">
                    Contact
                  </p>
                </li>
              </ul>
              <div className="lg:w-3/12 hidden">
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
          <div className="float-right 2xl:pr-[10rem] lg:pr-[5rem] pb-5 ml-10 lg:pb-10">
            <h1 class="text-xl lg:text-6xl  text-white tracking-wider font-serif ">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarComponent;
