import React from "react";
import owner from "../../src/assets/owner.png";
import owner1 from "../../src/assets/owner2.png";

function CustomeTeam() {
  return (
    <div className="flex justify-center lg:gap-20 gap-5 p-5">
      <div className="">
        <img
          src={owner}
          height={owner}
          width={owner}
          alt="broken"
          priority={true}
          className="w-full h-[70%] mb-2 "
        />

        <h1 className="px-1 lg:text-3xl  text-[14px] text-[#536068] mb-2">
          Jamil A. Mayo
        </h1>
        <p className="text-[11px] lg:text-xl font-normal px-1">
          CEO, Hitech Networks (HNL)
          <br />
          -
          <br />
          President
          <br />
          <br />
          <span className="text-[#Ff0021] underline underline-offset-8 cursor-pointer ">
            Contact
          </span>
        </p>
      </div>
      <div className="">
        <img
          src={owner1}
          height={owner1}
          width={owner1}
          alt="broken"
          priority={true}
          className="w-full h-[70%] mb-2 "
        />

        <h1 className="px-1 lg:text-3xl text-[14px] text-[#536068] mb-2">
          Dr. Istvan Grafjodi
        </h1>
        <p className="text-[11px] lg:text-xl font-normal px-1">
          Commercial Counsellor at the Embassy of Hungary in Pakistan
          <br />
          -
          <br />
          Role
          <br />
          <br />
          <span className="text-[#Ff0021] underline underline-offset-8 cursor-pointer ">
            Contact
          </span>
        </p>
      </div>
    </div>
  );
}

export default CustomeTeam;
