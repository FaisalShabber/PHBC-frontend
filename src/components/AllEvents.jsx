import React from "react";

const AllEvents = ({
  eventDate,
  eventDiscription,
  eventCountryLocation,
  eventCountry,
  textColor,
}) => {
  return (
    <div className="text-center mb-5 lg:w-[30%] w-[40%] gap-10 lg:gap-0">
      <h1
        className={`text-[${textColor}] lg:pb-10 lg:text-7xl text-[30px] underline underline-offset-8`}
      >
        {eventDate}
      </h1>
      <p className="h-24  lg:h-32  lg:text-3xl text-[14px] text-[#536068] mt-2 2xl:px-10">
        {eventDiscription}
      </p>
      <div className="">
        <p className=" text-[#536068] h-10 pb-2 lg:text-3xl mt-10">
          {eventCountryLocation}
        </p>
        <p className="text-[#536068] mt-5 pb-10 lg:text-3xl underline underline-offset-8">
          {eventCountry}
        </p>
        <button
          className={` text-[${textColor}]  text-xl lg:text-2xl underline pt-0 `}
        >
          Join
        </button>
      </div>
    </div>
  );
};

export default AllEvents;
