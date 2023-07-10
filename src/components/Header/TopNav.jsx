import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import Navbar from "./Navbar";
import { Carousel } from "antd";

const Header = ({ setActiveLink, bgimg, caroseldata, underline, title }) => {
  const [menu, setMenu] = useState(true);
  useEffect(() => {
    if (window.innerWidth < 650) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  }, []);
  return (
    <div className="z-10">
      <Carousel effect="fade" autoplaySpeed={5000} autoplay>
        <div className="relative">
          <img
            src={bgimg}
            alt=""
            className="w-full h-[50rem] lg:h-[42rem] 2xl:h-[60rem] object-cover"
          />
          {/* N-L-T */}
          <div className="absolute inset-0 flex items-center justify-center text-white z-10">
            <div className="absolute z-50 bg-cover bg-center bg-no-repeat h-[50rem] lg:h-[50rem] 2xl:h-[60rem]">
              <div
                className=" p-8 font-normal  text-[2rem] lg:hidden sm:hidden md:hidden text-[white] "
                onClick={() => {
                  console.log("click");
                  setMenu(!menu);
                }}
              >
                {" "}
                {menu ? <IoMdClose /> : <AiOutlineMenu />}{" "}
              </div>
              {
                <Navbar
                  setActiveLink={setActiveLink}
                  underline={underline}
                  title={title}
                  shawMenu={menu}
                />
              }
            </div>
          </div>
        </div>

        {/*  */}
        <div className="relative">
          {caroseldata[0] && (
            <img
              src={caroseldata[0]}
              alt=""
              className="w-full h-[50rem] lg:h-[42rem] 2xl:h-[60rem] object-cover"
            />
          )}
          <div className="absolute inset-0 flex items-center justify-center text-white z-10">
            <div className="absolute z-50 bg-cover bg-center bg-no-repeat h-[50rem] lg:h-[50rem] 2xl:h-[60rem]">
              <div
                className=" p-8 font-normal  text-[2rem] lg:hidden sm:hidden md:hidden text-[white] "
                onClick={() => {
                  console.log("click");
                  setMenu(!menu);
                }}
              >
                {" "}
                {menu ? <IoMdClose /> : <AiOutlineMenu />}{" "}
              </div>
              {
                <Navbar
                  setActiveLink={setActiveLink}
                  underline={underline}
                  title={title}
                  shawMenu={menu}
                />
              }
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src={caroseldata[1]}
            alt=""
            className="w-full h-[50rem] lg:h-[42rem] 2xl:h-[60rem] object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center text-white z-10">
            <div className="absolute z-50 bg-cover bg-center bg-no-repeat h-[50rem] lg:h-[50rem] 2xl:h-[60rem]">
              <div
                className=" p-8 font-normal  text-[2rem] lg:hidden sm:hidden md:hidden text-[white] "
                onClick={() => {
                  console.log("click");
                  setMenu(!menu);
                }}
              >
                {" "}
                {menu ? <IoMdClose /> : <AiOutlineMenu />}{" "}
              </div>
              {
                <Navbar
                  setActiveLink={setActiveLink}
                  underline={underline}
                  title={title}
                  shawMenu={menu}
                />
              }
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};
export default Header;
