import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../src/assets/logo1.png";
import NavbarComponent from "./NavbarComponent";

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

export default function Navbar({ setActiveLink, underline, title }) {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex items-center ">
      <MobileNav open={open} setOpen={setOpen} />
      <NavbarComponent
        title={title}
        logo={logo}
        ActiveLink={""}
        setActiveLink={setActiveLink}
        underline={underline}
      />
    </nav>
  );
}
