import { React } from "react";
// import fp1 from "../../../src/assets/fp1.png";
// import fp2 from "../../../src/assets/fp2.png";
// import fp3 from "../../../src/assets/fp3.png";
import NewsComponent from "./NewsComponent";

export const News = ({
  // setActiveLink,
  news,
  CustomeNewsHeading,
  CustomeArticleHeading,
}) => {
  return (
    <div className="2xl:px-20 lg:px-16 px-10 mb-14">
      {CustomeNewsHeading && (
        <div className="lg:flex justify-center items-center  hidden">
          <h1 className="text-[#34493c] 2xl:text-5xl lg:text-4xl  text-[36px] py-10">
            {CustomeNewsHeading}
          </h1>
        </div>
      )}

      <div className="flex lg:flex-row flex-col justify-center flex-wrap gap-14">
        {news &&
          news.map((item, index) => (
            <NewsComponent
              key={index}
              title={item.title}
              photo={item.photo}
              discription={item.discription}
              readMore={item.readMore}
            />
          ))}
      </div>
      {CustomeArticleHeading && (
        <div className="text-center py-10 2xl:py-10 lg:py-8  lg:mt-10">
          <p
            className="underline underline-offset-8 text-red-700 lg:text-3xl  cursor-pointer"
            // onClick={() => setActiveLink("event")}
          >
            Explore More
          </p>
        </div>
      )}
    </div>
  );
};
