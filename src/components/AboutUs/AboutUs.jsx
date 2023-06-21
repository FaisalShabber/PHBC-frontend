import React from "react";
import "./about.css";

export const AboutUs = () => {
  return (
    <div className="bg-[#e2e1dc]">
      <h1 className=" text-[#536068]  text-center  lg:text-5xl 2xl:text-5xl pt-20">
        Welcome to the Pakistan Hungary Business Council
      </h1>
      <div className="flex justify-center lg:px-40 px-10  flex-col lg:flex-row ">
        <div className="flex-1 pt-10 2xl:px-56 lg:px-30 ">
          <h1 className=" mb-16  text-[#536068] lg:text-3xl 2xl:text-3xl text-center tracking-wider leading-8 ">
            Here, you will find information about our organization and its
            mission to foster strong economic ties between Pakistan and Hungary.
            Our council serves as a platform for businesses and professionals
            who are interested in exploring opportunities in Pakistan and
            Hungary. Through our online resources and networking events, we aim
            to provide a space for individuals to connect and exchange
            information about business trends, regulations, and market insights.
          </h1>

          <div className="flex justify-center ">
            <button className="text-[#536068] pb-16 text-3xl underline underline-offset-8">
              Read More.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
