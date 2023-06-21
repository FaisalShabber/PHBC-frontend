import React from "react";
import { Link } from "react-router-dom";
import h1 from "../../../src/assets/h1.png";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="">
      <div
        className="bg-cover bg-center bg-no-repeat lg:h-[50rem] 2xl:h-[60rem]"
        style={{ backgroundImage: `url(${h1})` }}
      >
        <Navbar />

        {/* <div className="text-center">
      <p className="text-white  text-[60px]  leading-normal mb-5 lg:contents hidden">
       We aim at impactful trade.
      </p>
      <p className="text-white  text-[20px] font-black leading-normal mb-5 lg:hidden">
         We aim at impactful trade.
       </p> */}

        {/*       
      <div className="flex justify-center items-center mt-8">
        <Link
          href="https://www.facebook.com/HiTechNetworksPvtLtd"
          target="_blank"
        >
          <span className="cursor-pointer ">
            <Link to={'https://www.facebook.com/PHBC11/'} target="_blank">
              <BsFacebook color="#3B5998" className="w-[38px] h-[38px]" />
            </Link>

          </span>
        </Link>
        <span className="pl-4 lg:pl-4 text-3xl cursor-pointer">
          <Link to={'https://twitter.com/PakHungrain?t=lmSv7CsNJcVoWMB4T07ZdA&s=08'} target="_blank">
            <BsTwitter color="#1DA1F2" className="w-[38px] h-[38px]" />
          </Link>

        </span>
      </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};
export default Header;
