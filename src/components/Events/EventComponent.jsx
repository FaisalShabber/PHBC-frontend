import React from "react";

const EventComponent = ({ eventDate, eventDateColor, eventDiscription }) => {
  return (
    <div className="text-center mb-5 lg:mb-0 w-[30%]">
      <h1
        className={`text-[${eventDateColor}]  lg:text-8xl text-[48px] underline underline-offset-8`}
      >
        {eventDate}
      </h1>
      <p className="  lg:text-3xl text-[14px] text-[#536068] mt-10 2xl:px-10">
        {eventDiscription}
      </p>
      <button className="text-[#536068] pb-10 text-2xl underline mt-10 text-center">
        Read More.
      </button>
    </div>
  );
};

export default EventComponent;
