import React from "react";
import owner from "../../src/assets/owner.png";
import owner1 from "../../src/assets/owner1.jpeg";
import owner2 from "../../src/assets/owner2.jpeg";
import owner3 from "../../src/assets/owner3.jpeg";
import TeamImage from "./TeamImage";

function CustomeTeam({ setActiveLink }) {
  return (
    <div className="">
      <div className="flex justify-center lg:px-40 2xl:px-80 lg:gap-32 2xl:gap-40 mb-5">
        <TeamImage
          ownerphoto={owner}
          Name={"Jamil Ahmad Mayo"}
          President={"President PBHC"}
          CEO={"Founder & CEO HNL (Hitech Network (Pvt.) Limited)"}
          setActiveLink={setActiveLink}
        />
        <TeamImage
          ownerphoto={owner1}
          Name={"Dr. Istvan Grafjodi"}
          President={"Counsellor PBHC"}
          CEO={"Commercial Counsellor at the Embassy of Hungary in Pakistan"}
          setActiveLink={setActiveLink}
        />
      </div>
      <div className="flex justify-center lg:px-40 2xl:px-80  lg:gap-32 2xl:gap-40 mb-5">
        <TeamImage
          ownerphoto={owner2}
          Name={"Mr. Béla Fazekas"}
          President={"Patron-in-Chief PHBC"}
          CEO={"Hungarian Ambassador"}
          setActiveLink={setActiveLink}
        />

        <TeamImage
          ownerphoto={owner3}
          Name={"Lara N. Lone"}
          President={"Counsel Secretary"}
          CEO={"Global Account Manager at Hitech Network (Pvt.) Limited"}
          setActiveLink={setActiveLink}
        />
      </div>
    </div>
  );
}

export default CustomeTeam;
