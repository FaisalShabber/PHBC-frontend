import React from "react";

import Navbar from "./Navbar";

const Header = ({ setActiveLink, bgimg, underline, title }) => {
  return (
    <div className="">
      <div
        className="bg-cover bg-center bg-no-repeat lg:h-[50rem] 2xl:h-[60rem]"
        style={{ backgroundImage: `url(${bgimg})` }}
      >
        <Navbar
          setActiveLink={setActiveLink}
          underline={underline}
          title={title}
        />
      </div>
    </div>
  );
};
export default Header;
