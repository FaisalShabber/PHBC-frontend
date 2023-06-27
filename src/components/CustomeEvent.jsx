import React from "react";
import AllEvents from "./AllEvents";

const CustomeEvent = () => {
  return (
    <div className="justify-center  lg:flex-row flex-col  ">
      <div className="flex-1 py-[5rem] ">
        <h1 className="text-[#34493c] lg:pb-20 pb-10 lg:text-5xl text-center text-[36px] ">
          Events
        </h1>
        <div className="flex justify-center  lg:gap-[10rem] gap-6 ">
          {/* 1 */}
          <AllEvents
            eventDate={"10.6.23"}
            eventDiscription={`International Conference on Advances in Business Managemen and Information Technology`}
            eventCountryLocation={"Marriott Budapest City Center"}
            eventCountry={"Budapest"}
            textColor={"#Ff0021"}
          />
          {/* 2 */}
          <AllEvents
            eventDate={"28.8.23"}
            eventDiscription={`International Conference
            on Management and Information
            Technology (ICMIT)`}
            eventCountryLocation={"Exact Location"}
            eventCountry={"Pakistan"}
            textColor={"#Ff0022"}
          />
        </div>
        {/* 3 */}
        <div className="flex justify-center mt-10 lg:gap-[10rem] gap-6">
          <AllEvents
            eventDate={"27.9.23"}
            eventDiscription={`International Online Conference on
            Computational Collective Intelligence
            (ICCCI)`}
            eventCountryLocation={"Eotvos Lorand University"}
            eventCountry={"Budapest"}
            textColor={"#Ff0022"}
          />
          {/* 4 */}
          <AllEvents
            eventDate={"22.10.23"}
            eventDiscription={`IEEE International Multi Topic
            Conference (INMIC)`}
            eventCountryLocation={"Exact Location"}
            eventCountry={"Pakistan"}
            textColor={"#Ff0021"}
          />
        </div>
        {/* 5 */}
        <div className="flex justify-center mt-10 lg:gap-[10rem] gap-6">
          <AllEvents
            eventDate={"11.11.23"}
            eventDiscription={`International Conference on Chemical,
            Agricultural, Biological and Environmental Sciences (ICCABES)`}
            eventCountryLocation={"Marriott Budapest City Center"}
            eventCountry={"Budapest"}
            textColor={"#Ff0021"}
          />
          {/* 6 */}
          <AllEvents
            eventDate={"26.11.23"}
            eventDiscription={`International Conference on Nanotechnology,
            Cybersecurity, Cloud Computing, Engineering
            & Applied Sciences (NCC)`}
            eventCountryLocation={"Mercure Budapest Buda"}
            eventCountry={"Budapest"}
            textColor={"#Ff0022"}
          />
        </div>
      </div>
      <div className="text-center lg:pb-16 pb-10 ">
        <p className="underline underline-offset-8 text-[#ff3c3c] lg:text-3xl  ">
          Load more events
        </p>
      </div>{" "}
    </div>
  );
};

export default CustomeEvent;
