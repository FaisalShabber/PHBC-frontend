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
    <div className={`bg-[${BgColor}]`}>
      <h1
        className={`text-[${textColor}]  text-center  lg:text-5xl 2xl:text-5xl pt-20`}
      >
        {customeTitle}
      </h1>
      <div className="flex justify-center lg:px-40 px-10  flex-col lg:flex-row ">
        <div className="flex-1 pt-10 2xl:px-56 lg:px-30 ">
          <h1
            className={`mb-16  text-[${descriptionColor}] lg:text-3xl 2xl:text-3xl text-center tracking-wider leading-8`}
          >
            {description}
          </h1>

          {customeReadMore && (
            <div className="flex justify-center ">
              <button
                className={`text-[${textColor}] pb-16 text-3xl underline underline-offset-8`}
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
// #536068
// #e2e1dc
export default CustomeTDR;
