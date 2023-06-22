import { React } from "react";
// import fp1 from "../../../src/assets/fp1.png";
// import fp2 from "../../../src/assets/fp2.png";
// import fp3 from "../../../src/assets/fp3.png";
import NewsComponent from "./NewsComponent";

export const News = ({ news, CustomeNewsHeading, CustomeArticleHeading }) => {
  return (
    <div className="lg:px-20 px-10 mb-14">
      {CustomeNewsHeading && (
        <div className="lg:flex justify-center items-center  hidden">
          <h1 className="text-[#34493c] lg:text-5xl  text-[36px] py-16">
            What‘s new?
          </h1>
        </div>
      )}

      <div className="flex lg:flex-row flex-col justify-center flex-wrap gap-5">
        {news &&
          news.map((item) => (
            <NewsComponent
              title={item.title}
              photo={item.photo}
              discription={item.discription}
            />
          ))}
      </div>
      {CustomeArticleHeading && (
        <div className="text-center py-16">
          <p className="underline underline-offset-4 text-red-700 lg:text-4xl ">
            To the articles
          </p>
        </div>
      )}
    </div>
  );
};
