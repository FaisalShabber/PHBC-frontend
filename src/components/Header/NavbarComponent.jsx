import React, { useState } from "react";
import { Link } from "react-router-dom";
// import url('https://fonts.googleapis.com/css2?family=Baskervville&display=swap');

// AiOutlineMenu
const NavbarComponent = ({
  logo,
  title,
  setActiveLink,
  underline,
  shawMenu,
}) => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div className="">
        <div className="flex align-canter items-center">
          {/* desktop nav */}

          <div className="mt-[-2rem] lg:mt-[3rem] md:flex text-transform: uppercase justify-between 2xl:mt-[8rem] lg:px-20">
            {shawMenu && (
              <ul className="p-5  ">
                <li className="mb-5" onClick={() => setActiveLink("about")}>
                  <p
                    className={` text-white hover:text-slate-200 lg:text-4xl text-3xl underline-offset-8 cursor-pointer tracking-widest ${
                      underline === "about" ? "underline" : "no-underline"
                    }`}
                  >
                    ABOUT PHBC
                  </p>
                </li>
                <li className="mb-5" onClick={() => setActiveLink("mission")}>
                  <p
                    to=""
                    className={` text-white hover:text-slate-200 lg:text-4xl text-3xl underline-offset-8 cursor-pointer tracking-widest ${
                      underline === "mission" ? "underline" : "no-underline"
                    }`}
                  >
                    OUR MISSION
                  </p>
                </li>
                <li className="mb-5" onClick={() => setActiveLink("event")}>
                  <p
                    className={` text-white hover:text-slate-200 lg:text-4xl text-3xl underline-offset-8 cursor-pointer tracking-widest ${
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
                    className={` text-white hover:text-slate-200 lg:text-4xl text-3xl underline-offset-8 cursor-pointer tracking-widest ${
                      underline === "relations" ? "underline" : "no-underline"
                    }`}
                  >
                    RELATIONS
                  </p>
                </li>
                <li className="mb-5">
                  <p className="text-white hover:text-slate-200 lg:text-2xl text-xl tracking-wider">
                    Research & Initiatives
                  </p>
                </li>
                <li className="mb-5">
                  <p className="text-white hover:text-slate-200 lg:text-2xl text-xl tracking-wider">
                    News
                  </p>
                </li>
                <li className="mb-5">
                  <p className="text-white hover:text-slate-200 lg:text-2xl text-xl tracking-wider">
                    Materials
                  </p>
                </li>
                <li className="mb-5" onClick={() => setActiveLink("team")}>
                  <p
                    className={` text-white hover:text-slate-200 lg:text-2xl text-xl underline-offset-8 cursor-pointer tracking-widest ${
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
            )}
            <div className=" w-2/12 float float-right  lg:w-3/12 lg:float-right">
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
        <div className="float-right  lg:pr-[4rem] 2xl:pt-[10rem] pb-5 ml-10  2xl:pb-10">
          <h1 className="text-1px lg:text-[3rem] font-light  text-white tracking-wider font-serif ">
            {title}
          </h1>
        </div>
      </div>
    </>
  );
};

export default NavbarComponent;
