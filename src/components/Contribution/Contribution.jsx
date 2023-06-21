import { React } from "react";
import ContributionComponent from "./ContributionComponent";

export const Contribution = () => {
  return (
    <div className="bg-[#34493c] py-16 ">
      <h1 className="text-center  lg:mb-16 font-semibold text-[#e2ddda] lg:text-5xl text-[20px]">
        Contribution
      </h1>
      <div className="flex lg:justify-around lg:flex-row flex-col">
        <ContributionComponent
          key={1}
          percentage={"11%"}
          GDP={"National GDP"}
        />
        <ContributionComponent key={2} percentage={"25%"} GDP={"Tax Receipt"} />
        <ContributionComponent key={3} percentage={"40%"} GDP={"Exports"} />
      </div>
    </div>
  );
};
