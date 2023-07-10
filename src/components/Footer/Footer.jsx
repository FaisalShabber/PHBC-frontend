/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../src/assets/logo3.png";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CgTwitter } from "react-icons/cg";

const Footer = () => {
  let date = new Date();
  date.getFullYear();
  return (
    <footer id="footer" className="relative z-5 lg:py-10  py-10 bg-gray-100">
      <div className="border-b dark:border-gray-200">
        <div className=" px-10">
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="flex lg:w-[35%] lg:py-1">
              <ul>
                <li className=" lg:mt-2 ">
                  <div className="lg:p-8 p-1 text-[11px] lg:text-[1rem]   text-[#536068] ">
                    <Link to="tel: +92-423-5854071">
                      <p>t +92-423-5854071</p>
                      <br />
                    </Link>
                    <Link to="tel: 021-35630530">
                      <p>f 021-35630530</p>
                      <br />
                    </Link>
                    <Link
                      className="lg:mt-10"
                      mailto="corporatecommunication@phbc.org.pk"
                      onClick={() =>
                        window.open(
                          "corporatecommunication@phbc.org.pk",
                          "_blank"
                        )
                      }
                    >
                      {`corporatecommunication@phbc.org.pk`}
                    </Link>
                  </div>
                </li>
                <hr className="border-1 border-[#536068] mt-3 w-[90%] lg:ml-8 " />
                <div className="lg:p-8 p-1 lg:text-[15px] text-[11px]  text-[#536068]">
                  <h2>OUR MISSION</h2>
                  <h3 className="lg:mt-2">
                    We believe that collaboration is key to achieving our goal
                    of creating thriving nations, and a just and healthier
                    world. By bringing together businesses, entrepreneurs,
                    investors, and professionals, we can create a network of
                    support and shared expertise that benefits everyone
                    involved.
                  </h3>
                </div>
              </ul>
            </div>
            {/* 2 col */}
            <div className="lg:w-[30%]  flex lg:flex-col lg:justify-center  items-center">
              <Link to="#" className="flex-1">
                <div className="cursor-pointer align-middle">
                  <img
                    className="2xl:w-full lg:w-full w-[30%]  2xl:px-28"
                    src={logo}
                    alt="broken"
                  />
                </div>
              </Link>

              <div className=" lg:mt-[1rem] lg:text-sm lg:w-[60%] text-[12px] mt-2 text-center text-[#536068] ">
                {date.getFullYear()} PHBC <br />
                <br />
                All Rights Reserved
              </div>
            </div>

            <div className="w-full lg:w-[35%] flex pt-2">
              <div className="">
                <ul>
                  <div className="flex">
                    <div className="lg:p-8  text-[11px] lg:text-[1rem] lg:w-[50%] text-[#536068] ">
                      <p>CONNECT</p>
                      <br />
                      <Link
                        to="https://www.facebook.com/PHBC11"
                        target="_blank"
                      >
                        <h2 className="underline underline-offset-4 flex items-center gap-1">
                          <FaFacebookF />
                          Facebook
                        </h2>
                      </Link>
                      <Link to="">
                        <h2 className="underline underline-offset-4 flex items-center gap-1">
                          <FaLinkedinIn /> Linkedin
                        </h2>
                      </Link>
                      <Link to="" target="_blank">
                        <h2 className="underline underline-offset-4 flex items-center gap-1">
                          <CgTwitter />
                          Twitter
                        </h2>
                      </Link>
                    </div>
                    <div className="lg:ml-0 ml-[8rem] lg:p-10 text-[11px]  lg:text-[1rem] lg:mt-2 lg:w-[50%] text-[#536068] ">
                      <br />
                      <br />
                      <Link to="">
                        <p className="">TERMS OF USE</p>
                      </Link>

                      <Link to="">
                        <p className="">PRIVACY POLICY</p>
                      </Link>
                    </div>
                  </div>

                  <hr className="border-1 border-[#536068] mt-3 w-[90%] lg:ml-8" />
                  <div className="flex ">
                    <div className=" lg:p-8 p-1 lg:text-[1rem] text-[11px]  text-[#536068]">
                      <h2>LOCATION</h2>
                      <h3 className="mt-2">
                        Lower Ground Floor Commercial Arcade, Divine Gardens,
                        New Airport Road Lahore, Pakistan
                      </h3>
                    </div>
                    {/* <div className="lg:w-[50%] lg:p-8 p-2 lg:text-xl text-[11px] text-[#536068]">
                      <h2>HU OFFICE</h2>
                      <h3 className="mt-5 line-through">
                        Lower Ground Floor Commercial Arcade, Divine Gardens,
                        New Airport Road Lahore, Pakistan
                      </h3>
                    </div> */}
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* copyright */}
    </footer>
  );
};
export default Footer;
