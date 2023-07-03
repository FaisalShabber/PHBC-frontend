import React from "react";

const NewsComponent = ({ discription, photo, readMore, title }) => {
  return (
    <div className="flex-1">
      <img
        src={photo}
        height={photo}
        width={photo}
        alt="broken"
        priority={true}
        className="w-full lg:h-[50%] 2xl:h-[60%] mb-5 "
      />

      <h1 className="  lg:text-2xl 2xl:text-2xl font-medium text-[14px] text-[#536068]  mb-5">
        {title}
      </h1>
      <p className="text-[11px] lg:text-xl text-[#536068]">
        {discription}
        <br />
        <br />

        {readMore && (
          <div className="text-[#536068] underline underline-offset-8 cursor-pointer ">
            {readMore}
          </div>
        )}
      </p>
    </div>
  );
};

export default NewsComponent;
