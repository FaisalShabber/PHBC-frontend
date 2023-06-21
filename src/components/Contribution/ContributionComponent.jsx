import React from "react";

const ContributionComponent = ({ percentage, GDP }) => {
  return (
    <div className="text-center mb-5 lg:mb-0">
      <h1 className="text-white lg:text-8xl text-[48px]">{percentage}</h1>
      <p className="  lg:text-3xl text-[14px] text-[#e2ddda] mt-10">{GDP}</p>
      <button className="text-[#e2ddda] pb-10 text-2xl underline underline-offset-8 mt-10 text-center">
        Read More.
      </button>
    </div>
  );
};

export default ContributionComponent;
