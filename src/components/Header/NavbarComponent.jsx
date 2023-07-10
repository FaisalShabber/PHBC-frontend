// import React, { useState } from "react";
import { Link } from "react-router-dom";
// import url('https://fonts.googleapis.com/css2?family=Baskervville&display=swap');
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

// AiOutlineMenu
const NavbarComponent = ({
  logo,
  title,
  setActiveLink,
  underline,
  shawMenu,
}) => {
  // const [open, setOpen] = useState(true);
  return (
    <>
      <div className="Navfont">
        <div className="flex align-canter items-center">
          {/* desktop nav */}

          <div className="mt-[0rem] lg:mt-[5rem] md:flex text-transform: uppercase justify-between 2xl:mt-[8rem] lg:px-20">
            {shawMenu && (
              <ul className="p-5  ">
                <li className="mb-5" onClick={() => setActiveLink("about")}>
                  <p
                    className={` text-white hover:text-slate-200 lg:text-3xl 2xl:text-4xl text-2xl underline-offset-8 cursor-pointer tracking-widest ${
                      underline === "about" ? "underline" : "no-underline font-"
                    }`}
                  >
                    ABOUT PHBC
                  </p>
                </li>
                <li className="mb-5" onClick={() => setActiveLink("mission")}>
                  <p
                    to=""
                    className={` text-white hover:text-slate-200 lg:text-3xl 2xl:text-4xl text-2xl underline-offset-8 cursor-pointer tracking-widest ${
                      underline === "mission" ? "underline" : "no-underline"
                    }`}
                  >
                    OUR MISSION
                  </p>
                </li>
                <li className="mb-5" onClick={() => setActiveLink("event")}>
                  <p
                    className={` text-white hover:text-slate-200 lg:text-3xl 2xl:text-4xl text-2xl underline-offset-8 cursor-pointer tracking-widest ${
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
                    className={` text-white hover:text-slate-200 lg:text-3xl 2xl:text-4xl text-2xl underline-offset-8 cursor-pointer tracking-widest ${
                      underline === "relations" ? "underline" : "no-underline"
                    }`}
                  >
                    RELATIONS
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
                <li className="mb-5" onClick={() => setActiveLink("contact")}>
                  <p
                    className={` text-white hover:text-slate-200 lg:text-2xl text-xl underline-offset-8 cursor-pointer tracking-widest ${
                      underline === "contact" ? "underline" : "no-underline"
                    }`}
                  >
                    Contact
                  </p>
                </li>
              </ul>
            )}
            <div className=" w-2/12  float-right mt-[-5rem] mr-8 lg:mt-0 lg:w-[22%] lg:float-right">
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
        <div className="h-[6rem] lg:float-right lg:pr-[4rem] pr-2 mt-10 2xl:pt-[5rem] pb-5 text-center  2xl:pb-10">
          <p className="text-2xl lg:text-[3rem] 2xl:text-[4rem] font-light  text-white tracking-wider font-serif ">
            {title}
          </p>
        </div>
        <div className="justify-center lg:justify-normal  pt-[1rem] flex lg:pt-[5rem] 2xl:pt-[14rem] gap-10 pb-5 lg:ml-[6rem]">
          <Link to="https://www.facebook.com/PHBC11" target="_blank">
            <BsFacebook className="text-3xl opacity-50" />
          </Link>
          <Link
            to="https://twitter.com/PakHungrain?t=lmSv7CsNJcVoWMB4T07ZdA&s=08"
            target="_blank"
          >
            <AiFillTwitterCircle className="text-4xl opacity-50" />
          </Link>
          <Link to="" target="_blank">
            <BsLinkedin className="text-3xl opacity-50" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavbarComponent;
