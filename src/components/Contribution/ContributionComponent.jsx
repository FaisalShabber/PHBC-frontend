import React from "react";

const ContributionComponent = ({ percentage, GDP }) => {
  return (
    <div className="text-center mb-5 lg:mb-0">
      <h1 className="text-white lg:text-7xl 2xl:text-8xl  text-[48px]">
        {percentage}
      </h1>
      <p className="  lg:text-xl text-[14px] text-[#e2ddda] 2xl:mt-10 lg:mt-6">
        {GDP}
      </p>
      <button className="text-[#e2ddda] 2xl:pb-4 lg:pb-4 text-base underline underline-offset-8 mt-6 text-center">
        Read More.
      </button>
    </div>
  );
};

export default ContributionComponent;
