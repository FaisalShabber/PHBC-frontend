import { React } from "react";
import EventComponent from "./EventComponent";
// import fp1 from "../../../src/assets/fp1.png";
// import fp4 from "../../../src/assets/fp4.png";

export const Events = () => {
  return (
    <div className="flex justify-center  lg:flex-row flex-col 2xl:px-20 ">
      <div className="flex-1 py-[6rem]">
        <h1 className="text-[#34493c] lg:text-5xl text-center text-[36px] ">
          Events
        </h1>
        <div className="flex justify-center 2xl:py-16 lg:py-10 gap-16">
          <EventComponent
            eventDate={"10.6.23"}
            eventDateColor="#Ff0021"
            eventDiscription="International Conference on Advances in Business Management and Information Technology"
            eventCountry="Budapest"
          />
          <EventComponent
            eventDate={"28.8.23"}
            eventDateColor="#34493c"
            eventDiscription="International Conference on Management and Information Technology (ICMIT)"
            eventCountry="Pakistan"
          />
        </div>

        <div className="text-center ">
          <p className="underline underline-offset-8 text-[#34493c] lg:text-4xl ">
            Explore and join our events
          </p>
        </div>
      </div>
    </div>
  );
};
export default Events;
