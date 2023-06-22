import React from "react";

const NewsComponent = ({ discription, title, photo }) => {
  return (
    <div className="flex-1">
      <img
        src={photo}
        height={photo}
        width={photo}
        alt="broken"
        priority={true}
        className="w-full h-[55%] mb-2 "
      />

      <h1 className="px-1 lg:text-2xl 2xl:text-2xl text-[14px] text-[#536068] mb-2">
        {title}
      </h1>
      <p className="text-[11px] lg:text-2xl font-normal px-1">
        {discription}
        <br />
        <br />
        {/* <span className="text-[#536068] underline underline-offset-8 cursor-pointer ">
          Read more
        </span>{" "} */}
      </p>
    </div>
  );
};

export default NewsComponent;
