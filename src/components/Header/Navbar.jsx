import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../src/assets/logo1.png";

function NavLink({ to, children }) {
  return (
    <Link
      href={to}
      className="text-gray-800 hover:text-gray-900 lg:text-white lg:hover:text-gray-200 px-4 py-2 font-normal text-[16px]"
    >
      {children}
    </Link>
  );
}

function MobileNav({ open, setOpen }) {
  return (
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
      <div className="flex flex-col ml-4">
        <NavLink
          to="/about"
          onClick={() => setTimeout(() => setOpen(!open), 100)}
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          onClick={() => setTimeout(() => setOpen(!open), 100)}
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex items-center ">
      <MobileNav open={open} setOpen={setOpen} />

      <div className="">
        <div className="flex align-canter items-center">
          <div
            className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {/* hamburger button */}
            <span
              className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
                open ? "rotate-45 translate-y-3.5" : ""
              }`}
            />
            <span
              className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
                open ? "w-0" : ""
              }`}
            />
            <span
              className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
                open ? "-rotate-45 -translate-y-3.5" : ""
              }`}
            />
          </div>
          {/* desktop nav */}
          <div className="md:flex text-transform: uppercase justify-between mt-[5rem] lg:px-20 2xl:p-20">
            <ul className="p-4">
              <li className="mb-5">
                <Link
                  to="/"
                  className="text-white hover:text-slate-200 text-3xl tracking-widest hover:underline"
                >
                  ABOUT PHBC
                </Link>
              </li>
              <li className="mb-5">
                <Link
                  to="/about"
                  className="text-white hover:text-slate-200 text-3xl tracking-widest"
                >
                  OUR MISSION
                </Link>
              </li>
              <li className="mb-5">
                <Link
                  to="/contact"
                  className="text-white hover:text-slate-200 text-3xl tracking-widest"
                >
                  EVENTS
                </Link>
              </li>
              <li className="mb-16">
                <Link
                  to="/contact"
                  className="text-white hover:text-slate-200 text-3xl tracking-widest"
                >
                  RELATIONS
                </Link>
              </li>
              <li className="mb-5">
                <Link
                  to="/contact"
                  className="text-white hover:text-slate-200 text-xl tracking-wider"
                >
                  Research & Initiatives
                </Link>
              </li>
              <li className="mb-5">
                <Link
                  to="/contact"
                  className="text-white hover:text-slate-200 text-xl tracking-wider"
                >
                  News
                </Link>
              </li>
              <li className="mb-5">
                <Link
                  to="/contact"
                  className="text-white hover:text-slate-200 text-xl tracking-wider"
                >
                  Materials
                </Link>
              </li>
              <li className="mb-5">
                <Link
                  to="/contact"
                  className="text-white hover:text-slate-200 text-xl tracking-wider"
                >
                  Team
                </Link>
              </li>
              <li className="mb-5">
                <Link
                  to="/contact"
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
            We aim at impactful trade.
          </h1>
        </div>
      </div>
    </nav>
  );
}
