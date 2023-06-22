import React from "react";

const AllEvents = ({
  eventDate,
  eventDiscription,
  eventCountryLocation,
  eventCountry,
  textColor,
}) => {
  return (
    <div className="text-center mb-5 lg:w-[30%] w-[40%] gap-10">
      <h1
        className={`text-[${textColor}] lg:pb-10 lg:text-8xl text-[30px] underline underline-offset-8`}
      >
        {eventDate}
      </h1>
      <p className="  lg:text-3xl text-[14px] text-[#536068] mt-10 2xl:px-10">
        {eventDiscription}
      </p>
      <p className="text-[#536068] pb-2 lg:text-3xl mt-10 text-center">
        {eventCountryLocation}
      </p>
      <p className="text-[#536068] mt-5 pb-10 lg:text-3xl underline underline-offset-8  text-center">
        {eventCountry}
      </p>
      {/* <button
        className={`text-[${textColor}]  pb-10 text-2xl underline pt-8 text-center `}
      >
        Join
      </button> */}
    </div>
  );
};

export default AllEvents;
