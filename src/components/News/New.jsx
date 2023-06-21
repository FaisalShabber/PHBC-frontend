import { React } from "react";
import fp1 from "../../../src/assets/fp1.png";
import fp2 from "../../../src/assets/fp2.png";
import fp3 from "../../../src/assets/fp3.png";
import NewsComponent from "./NewsComponent";

export const News = () => {
  var title1 = "Hungary Ambassador at CEO Summit Asia";
  var title2 = "Lahore welcomed Istvan Grafjodi";
  var title3 = "First Meeting with Hungary‘s Commercial Counsellor";

  var discription1 =
    "CEO Summit Asia, organized by CEO Club Pakistan with the agenda of „Turnaround Pakistan“ took place in Serena Hotel, Islamabad. 200 + CEOs attended the event.Jamil Ahmed Mayo and Istvan Grafjodi sat on HNL stall with description of moving towards the implementation plan.";
  var discription2 =
    "Jamil Ahmed Mayo warmly welcomed Istvan Grafjodi in Lahore where he presented the concept paper that was higly appreciated by Istavan Grafjodi and he said he will discuss with ambassador and get back with his working notes.";
  var discription3 =
    "Jamil Ahmad Mayo’s first formal meet up with Istvan Grafjodi, Commercial Counsellor at Hungary, to set up PHBC where Hungarian Business counselor asked to mature the idea by giving comprehensive concept paper.";
  return (
    <div className="lg:px-20 px-10 mb-14">
      <div className="lg:flex justify-center items-center  hidden">
        <h1 className="text-[#34493c] lg:text-5xl  text-[36px] py-16">
          What‘s new?
        </h1>
      </div>
      {/* <div className="mb-1 lg:hidden">
        <h1 className="text-black font-semibold  text-[20px] text-center">
          News
        </h1>
        <p className="text-[#028652] font-medium  text-[11px] cursor-pointer text-end ">
          Views All
        </p>
      </div> */}
      <div className="flex lg:flex-row flex-col justify-center flex-wrap gap-5">
        {fp1 && (
          <NewsComponent
            title={title1}
            photo={fp1}
            discription={discription1}
          />
        )}
        {fp2 && (
          <NewsComponent
            title={title2}
            photo={fp2}
            discription={discription2}
          />
        )}
        {fp3 && (
          <NewsComponent
            title={title3}
            photo={fp3}
            discription={discription3}
          />
        )}
      </div>
      <div className="text-center py-16">
        <p className="underline underline-offset-4 text-red-700 lg:text-4xl ">
          To the articles
        </p>
      </div>
    </div>
  );
};
