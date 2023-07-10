import React from "react";

function CustomeTDR({
  customeTitle,
  description,
  textColor,
  BgColor,
  descriptionColor,
  customeReadMore,
}) {
  return (
    <div className={`bg-[${BgColor}] py-0`}>
      <h1
        className={`text-[${textColor}]  text-center text-2xl lg:text-4xl 2xl:text-5xl lg:pt-20 pt-16 `}
      >
        {customeTitle}
      </h1>
      <div className="flex justify-center lg:px-40 px-10  flex-col lg:flex-row ">
        <div className="flex-1 pt-8 2xl:px-56 lg:px-30 lg:py-10 ">
          <h1
            className={`mb-16  text-[${descriptionColor}] lg:text-2xl 2xl:text-3xl text-center tracking-wider leading-8`}
          >
            {description}
          </h1>

          {customeReadMore && (
            <div className="flex justify-center ">
              <button
                className={`text-[${textColor}] pb-16 text-lg underline underline-offset-8`}
              >
                Read More.
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default CustomeTDR;
