import React from "react";
import fp1 from "../../public/fp1.png";
import fp2 from "../../public/fp2.png";
import fp3 from "../../public/fp3.png";
import fp4 from "../../public/fp4.png";
import fp5 from "../../public/fp5.png";
import Image from "next/image";
import styles from '../../styles/Header.module.css'
import Navbar from '../Header/Navbar'
import Link from "next/link";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { Carousel } from "antd";


export const Carousal1 = () => {
    const myClassName = styles['my-carousel']


    return (
        <>
            {/* <style jsx>{`
        .dotStyle
        .ant-carousel .slick-dots li button {
            background: #ff4ef6;
            opacity: 0.4;
          }
          
          .dotStyle.ant-carousel .slick-dots li.slick-active button {
            opacity: 1;
            background: #ff4ef6;
          }
          
      `}</style> */}
            <Carousel autoplay className="px-20">
                <div className="bg-grey-400">
                    <div className="flex gap-6 h-auto mb-20">
                        <div className="w-[33.3%]">
                            {/* <Image
                                src={fp1.src}
                                height={fp1.height}
                                width={fp1.width}
                                alt="broken"
                                priority={true}
                                className="w-full"
                            /> */}

                            <h1 className="font-medium  text-[20px] text-[#101010] mb-2">
                                Hungarian Embassy
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Sed convallis a id cras
                                leo. Magna leo egestas pretium mi id Magna leo egestas pretium
                                mi id{" "}
                                <span className="text-[#028652] cursor-pointer">Read more</span>{" "}
                            </p>
                        </div>
                        <div className="w-[33.3%]">
                            {/* <Image
                                src={fp1.src}
                                height={fp1.height}
                                width={fp1.width}
                                alt="broken"
                                priority={true}
                                className="w-full"
                            /> */}

                            <h1 className="font-medium  text-[20px] text-[#101010] mb-2">
                                Hungarian Embassy
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Sed convallis a id cras
                                leo. Magna leo egestas pretium mi id Magna leo egestas pretium
                                mi id{" "}
                                <span className="text-[#028652] cursor-pointer">Read more</span>{" "}
                            </p>
                        </div>
                        <div className="w-[33.3%]">
                            {/* <Image
                                src={fp1.src}
                                height={fp1.height}
                                width={fp1.width}
                                alt="broken"
                                priority={true}
                                className="w-full"
                            /> */}

                            <h1 className="font-medium  text-[20px] text-[#101010] mb-2">
                                Hungarian Embassy
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Sed convallis a id cras
                                leo. Magna leo egestas pretium mi id Magna leo egestas pretium
                                mi id{" "}
                                <span className="text-[#028652] cursor-pointer">Read more</span>{" "}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-red-400">
                    <div className="flex gap-6 h-auto mb-20">
                        <div className="w-[33.3%]">
                            {/* <Image
                                src={fp1.src}
                                height={fp1.height}
                                width={fp1.width}
                                alt="broken"
                                priority={true}
                                className="w-full"
                            /> */}

                            <h1 className="font-medium  text-[20px] text-[#101010] mb-2">
                                Hungarian Embassy
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Sed convallis a id cras
                                leo. Magna leo egestas pretium mi id Magna leo egestas pretium
                                mi id{" "}
                                <span className="text-[#028652] cursor-pointer">Read more</span>{" "}
                            </p>
                        </div>
                        <div className="w-[33.3%]">
                            {/* <Image
                                src={fp1.src}
                                height={fp1.height}
                                width={fp1.width}
                                alt="broken"
                                priority={true}
                                className="w-full"
                            /> */}

                            <h1 className="font-medium  text-[20px] text-[#101010] mb-2">
                                Hungarian Embassy
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Sed convallis a id cras
                                leo. Magna leo egestas pretium mi id Magna leo egestas pretium
                                mi id{" "}
                                <span className="text-[#028652] cursor-pointer">Read more</span>{" "}
                            </p>
                        </div>
                        <div className="w-[33.3%]">
                            {/* <Image
                                src={fp1.src}
                                height={fp1.height}
                                width={fp1.width}
                                alt="broken"
                                priority={true}
                                className="w-full"
                            /> */}

                            <h1 className="font-medium  text-[20px] text-[#101010] mb-2">
                                Hungarian Embassy
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Sed convallis a id cras
                                leo. Magna leo egestas pretium mi id Magna leo egestas pretium
                                mi id{" "}
                                <span className="text-[#028652] cursor-pointer">Read more</span>{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </Carousel>
        </>
    );
};




// export const News = () => {
//     return (
//         <div className="px-20 mb-14">
//             <div className="flex justify-between items-center mb-4">
//                 <h1 className="text-black font-semibold  text-[36px]">News</h1>
//                 <h1 className="text-[#028652] font-medium  text-[16px]">Views All</h1>
//             </div>
//             <div className="flex justify-center flex-wrap gap-5">
//                 <div className="flex-1">
//                     <Image
//                         src={fp1.src}
//                         height={fp1.height}
//                         width={fp1.width}
//                         alt="broken"
//                         priority={true}
//                         className="w-full mb-1 scale-100 hover:scale-105 ease-in duration-300"
//                     />

//                     <h1 className="font-medium  text-[20px] text-[#101010] mb-2">
//                         Hungarian Embassy
//                     </h1>
//                     <p>
//                         Lorem ipsum dolor sit amet consectetur. Sed convallis a id cras leo.
//                         Magna leo egestas pretium mi id Magna leo egestas pretium mi id{" "}
//                         <span className="text-[#028652] cursor-pointer">Read more</span>{" "}
//                     </p>
//                 </div>
//                 <div className="flex-1">
//                     {" "}
//                     <Image
//                         src={fp2.src}
//                         height={fp2.height}
//                         width={fp2.width}
//                         alt="broken"
//                         priority={true}
//                         className="w-full mb-1 scale-100 hover:scale-105 ease-in duration-300"
//                     />
//                     <h1 className="font-medium  text-[20px] text-[#101010] mb-2">
//                         Strengthening Ties
//                     </h1>
//                     <p>
//                         Lorem ipsum dolor sit amet consectetur. Sed convallis a id cras leo.
//                         Magna leo egestas pretium mi id Magna leo egestas pretium mi id{" "}
//                         <span className="text-[#028652] cursor-pointer">Read more</span>{" "}
//                     </p>
//                 </div>
//                 <div className="flex-1">
//                     {" "}
//                     <Image
//                         src={fp3.src}
//                         height={fp3.height}
//                         width={fp3.width}
//                         alt="broken"
//                         priority={true}
//                         className="w-full mb-1 scale-100 hover:scale-105 ease-in duration-300"
//                     />
//                     <h1 className="font-medium  text-[20px] text-[#101010] mb-2">
//                         The beginning
//                     </h1>
//                     <p>
//                         Lorem ipsum dolor sit amet consectetur. Sed convallis a id cras leo.
//                         Magna leo egestas pretium mi id Magna leo egestas pretium mi id{" "}
//                         <span className="text-[#028652] cursor-pointer">Read more</span>{" "}
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

export const Contribution = () => {
    return (
        <div className="bg-[#0286520F] bg-opacity-60 py-12 mb-14 ">
            <h1 className="text-center font-semibold text-[#101010] text-[36px]">
                Contribution
            </h1>
            <div className="flex justify-around">
                <div className="text-center">
                    <h1 className="text-[#028652] font-semibold  text-[96px]">11%</h1>
                    <p className="font-normal  text-[20px] text-[#101010]">
                        National GDP
                    </p>
                </div>
                <div className="text-center">
                    <h1 className="text-[#028652] font-semibold  text-[96px]">25%</h1>
                    <p className="font-normal  text-[20px] text-[#101010]">Tax Receipt</p>
                </div>
                <div className="text-center">
                    <h1 className="text-[#028652] font-semibold  text-[96px]">40%</h1>
                    <p className="font-normal  text-[20px] text-[#101010]">Exports</p>
                </div>
            </div>
        </div>
    );
};

export const Events = () => {
    return (
        <div className="flex justify-center   px-20  mb-14  gap-5">
            <div className="flex-1 pt-28 pr-16">
                <h1 className="font-semibold  text-[36px] text-[#101010]">Events</h1>
                <p className="font-normal  text-[16px] text-[#101010] mb-9">
                    Journey of Istavan Grafgodi and Jamil Ahmad Mayo towards the
                    establishment of PHBC
                </p>
                <button className="bg-[#02865236]  h-[45px] rounded-[26px] w-[158px]">
                    View All
                </button>
            </div>
            <div className="flex-1">
                <Image
                    src={fp1.src}
                    height={fp1.height}
                    width={fp1.width}
                    alt="broken"
                    priority={true}
                    className="w-full mb-1 scale-100 hover:scale-105 ease-in duration-300"
                />

                <h1 className="font-medium  text-[20px] text-[#101010] mb-2">
                    Hungarian Embassy
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Sed convallis a id cras leo.
                    Magna leo egestas pretium mi id Magna leo egestas pretium mi id{" "}
                    <span className="text-[#028652] cursor-pointer">Read more</span>{" "}
                </p>
            </div>
            <div className="flex-1">
                <Image
                    src={fp4.src}
                    height={fp4.height}
                    width={fp4.width}
                    alt="broken"
                    priority={true}
                    className="w-full mb-1 scale-100 hover:scale-105 ease-in duration-300"
                />

                <h1 className="font-medium  text-[20px] text-[#101010] mb-2">
                    Hungarian Embassy
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Sed convallis a id cras leo.
                    Magna leo egestas pretium mi id Magna leo egestas pretium mi id{" "}
                    <span className="text-[#028652] cursor-pointer">Read more</span>{" "}
                </p>
            </div>
        </div>
    );
};
