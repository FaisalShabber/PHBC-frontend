/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../src/assets/logo3.png";

const Footer = () => {
  let date = new Date();
  date.getFullYear();
  return (
    <footer id="footer" className="relative z-5 lg:pt-8  bg-[#e2e1dc]">
      <div className="border-b dark:border-gray-300 py-5">
        <div className=" px-10 gl:px-12  ">
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="lg:w-[33%] py-1">
              <ul>
                <li className="mt-2">
                  <div className="p-10 text-[11px] lg:text-xl  text-[#536068] leading-8">
                    <Link to="tel: +92-423-5854071">
                      <p>t +92-423-5854071</p>
                      <br />
                    </Link>
                    <Link to="tel: 021-35630530">
                      <p>f 021-35630530</p>
                      <br />
                    </Link>
                    <Link
                      className="mt-10"
                      to="corporatecommunication@phbc.org.pk"
                    >
                      {`corporatecommunication@phbc.org.pk`}
                    </Link>
                  </div>
                </li>
                <hr class="border-1 border-[#536068] mt-5 w-[85%] ml-10" />
                <div className="p-8 text-xl text-[#536068]">
                  <h2>OUR MISSION</h2>
                  <h3 className="mt-5">
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
            <div className="lg:w-[33%] flex flex-col justify-center items-center">
              <Link to="#" className="flex">
                <div className="cursor-pointer">
                  <img
                    className="2xl:w-full lg:w-[50] 2xl:px-28"
                    src={logo}
                    alt="broken"
                  />
                </div>
              </Link>

              <div className="mt-8 lg:text-sm lg:w-[60%]  font-semibold text-center text-[#536068] ">
                {date.getFullYear()} PHBC <br />
                All Rights Reserved
              </div>
            </div>

            <div className="w-full lg:w-[33%] flex pt-2">
              <div className="">
                <ul>
                  <div className="flex">
                    <div className="p-8 text-[11px] lg:text-2xl lg:w-[50%] text-[#536068] ">
                      <p>CONNECT</p>
                      <br />
                      <Link
                        to="https://www.facebook.com/PHBC11"
                        target="_blank"
                      >
                        <h2 className="underline underline-offset-4">
                          Facebook
                        </h2>
                      </Link>
                      <Link to="">
                        <h2 className="underline underline-offset-4">
                          Linkedin
                        </h2>
                      </Link>
                      <Link
                        to="https://twitter.com/PakHungrain?t=lmSv7CsNJcVoWMB4T07ZdA&s=08"
                        target="_blank"
                      >
                        <h2 className="underline underline-offset-4">
                          Twitter
                        </h2>
                      </Link>
                    </div>
                    <div className="p-10 text-[11px] 2xl:text-2xl lg:text-xl mt-2 lg:w-[50%] text-[#536068] ">
                      <br />
                      <br />

                      <Link
                        to="https://www.facebook.com/PHBC11"
                        target="_blank"
                      >
                        <h2 className="">TERMS OF USE</h2>
                      </Link>
                      <Link to="">
                        <h2 className="">PRIVACY POLICY</h2>
                      </Link>
                    </div>
                  </div>

                  <hr class="border-1 border-[#536068] mt-5 w-[85%] ml-10" />
                  <div className="flex">
                    <div className="lg:w-[50%] p-8 text-xl text-[#536068]">
                      <h2>PK OFFICE</h2>
                      <h3 className="mt-5">
                        Lower Ground Floor Commercial Arcade, Divine Gardens,
                        New Airport Road Lahore, Pakistan
                      </h3>
                    </div>
                    <div className="lg:w-[50%] p-8 text-xl text-[#536068]">
                      <h2>HU OFFICE</h2>
                      <h3 className="mt-5 line-through">
                        Lower Ground Floor Commercial Arcade, Divine Gardens,
                        New Airport Road Lahore, Pakistan
                      </h3>
                    </div>
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
