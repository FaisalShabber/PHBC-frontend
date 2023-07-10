import React from "react";

function TeamImage({ ownerphoto, Name, President, CEO, setActiveLink }) {
  return (
    <div className=" w-[50%] px-4 ">
      <img
        src={ownerphoto}
        height={ownerphoto}
        width={ownerphoto}
        alt="broken"
        priority={true}
        className="w-full lg:h-[65%] h-[55%] object-cover mb-2 bg-cover bg-center bg-no-repeat"
      />
      <h1 className="px-1 lg:text-3xl  text-[14px] text-[#536068] mb-2">
        {Name}
      </h1>
      <p className="text-[11px] lg:text-xl font-normal px-1">
        {President}
        <br />
        <br />
        <p> {CEO}</p>
        <br />

        <span
          className="text-[#Ff0021] underline underline-offset-8 cursor-pointer "
          onClick={() => setActiveLink("contact")}
        >
          Contact
        </span>
      </p>
    </div>
  );
}

export default TeamImage;
