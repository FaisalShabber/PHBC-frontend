import React from "react";
import "./style.scss";
function VerticalTimeline() {

  const domasticRetation=[
   {
    date:"1949",
    discription:`The Hungarian Trade Office in Karachi is inagurated 
    by the Ministry of Foreign Trade and Mr. Hasnie state 
    secretary is invited to visit Budapest`
  }, 
   {
    date:"1952",
    discription:`Hungary participates at the Karachi International 
    Trade Fair for the first time`
  }, 
   {
    date:"1958",
    discription:`Hungarian-Pakistan Trade agreement is signed`
  }, 
   {
    date:"1959",
    discription:`Hungarian-Pakistan Trade agreement is signed`
  }, 
   {
    date:"1965",
    discription:"Established of diplomatic…"
  }, 
   {
    date:"2014",
    discription:"Levente Magyar, …"
  }, 
   {
    date:"2015",
    discription:`2015, Hungary and Pakistan signed a memorandum 
    of understanding on higher education and scientific 
    exchange program, which gives the framework of the 
    so-called…`
  }, 
   {
    date:"2016",
    discription:`The chairman of the water and power development 
    authorty (WAPDA), the chairperson…`
  }, 
   {
    date:"2017",
    discription:"Deputy State Secretary for opening to the south…"
  }, 
   {
    date:"2023",
    discription:"Today, …"
  }
   
]
  return (
    <>

      <div class="timelines">

        <section class="timeline education">

          <ul class="timeline-items">
           <li class="timeline-item">
              <h3>
              <p className="dates"> 1949</p>The Hungarian Trade Office in Karachi is inagurated
                by the Ministry of Foreign Trade and Mr. Hasnie state
                secretary is invited to visit Budapest
                </h3>
            </li>
           <li class="timeline-item">
              <h3>
              <p className="dates"> 1952</p>Hungary participates at the Karachi International 
           Trade Fair for the first time
                </h3>
            </li>
           <li class="timeline-item">
              <h3>
              <p className="dates"> 1958</p>Hungarian-Pakistan Trade agreement is signed
                </h3>
            </li>
           <li class="timeline-item">
              <h3>
              <p className="dates"> 1959</p>The Hungarian Trade Ofice in Karachi is closed by 
the Ministry if Foreign Trade due to poor business 
relations. The office is taken over by the Ministry 
of Foreign Affairs, and it continues to function as 
a foreign trade office, but the focus is shifted to 
foreign affair and trade becomes a secondary issue.
                </h3>
            </li>
           <li class="timeline-item">
              <h3>
              <p className="dates"> 1965</p>Hungarian-Pakistan Trade agreement is signed
                </h3>
            </li>
           <li class="timeline-item">
              <h3>
              <p className="dates"> 2014</p>Levente Magyar, …
                </h3>
            </li>
           <li class="timeline-item">
              <h3>
              <p className="dates"> 2015</p>2015, Hungary and Pakistan signed a memorandum 
           of understanding on higher education and scientific 
           exchange program, which gives the framework of the 
           so-called…
                </h3>
            </li>
           <li class="timeline-item">
              <h3>
              <p className="dates"> 2016</p>The chairman of the water and power development 
           authorty (WAPDA), the chairperson…
                </h3>
            </li>
           <li class="timeline-item">
              <h3>
              <p className="dates"> 2017</p>Deputy State Secretary for opening to the south…
                </h3>
            </li>
           <li class="timeline-item">
              <h3>
              <p className="dates"> 2023</p>Today, …
                </h3>
            </li>
          </ul>
        </section>



      </div>

    </>
    // <div className="p-5 lg:p-20 px-[20%]">
    //   <div className=" flex ">
    //     <h1 className=" text-1xl text-[#Ff0021] lg:text-8xl px-1">1949</h1>
    //     <div>
    //       <div className="border absolute border-gray-400 h-full  "></div>
    //       <p className="text-1xl lg:text-3xl tracking-wide text-[#34493c] px-[10%]">
    //         The Hungarian Trade Office in Karachi is inagurated by the Ministry
    //         of Foreign Trade and Mr. Hasnie state secretary is invited to visit
    //         Budapest
    //       </p>
    //     </div>
    //   </div>
    //   {/* 2 */}
    //   <div className=" flex pt-[10%] ">
    //     <h1 className="text-1xl text-[#Ff0021] lg:text-8xl px-1">1952</h1>
    //     <div>
    //       {/* <div className="border absolute border-gray-400 h-screen  "></div> */}
    //       <p className="text-3xl tracking-wide text-[#34493c] px-[10%]">
    //         Hungary participates at the Karachi International Trade Fair for the
    //         first time
    //       </p>
    //     </div>
    //   </div>
    //   {/* 3 */}
    //   <div className=" flex pt-[10%] ">
    //     <h1 className="text-8xl text-[#Ff0021] px-10">1958</h1>
    //     <div>
    //       {/* <div className="border absolute border-gray-400 h-screen  "></div> */}
    //       <p className="text-3xl tracking-wide text-[#34493c] ml-20">
    //         Hungarian-Pakistan Trade agreement is signed
    //       </p>
    //     </div>
    //   </div>
    //   {/* 4 */}
    //   <div className=" flex pt-[10%] ">
    //     <h1 className="text-8xl text-[#Ff0021] px-10">1959</h1>
    //     <div>
    //       {/* <div className="border absolute border-gray-400 h-screen  "></div> */}
    //       <p className="text-3xl tracking-wide text-[#34493c] px-[10%]">
    //         The Hungarian Trade Ofice in Karachi is closed by the Ministry if
    //         Foreign Trade due to poor business relations. The office is taken
    //         over by the Ministry of Foreign Affairs, and it continues to
    //         function as a foreign trade office, but the focus is shifted to
    //         foreign affair and trade becomes a secondary issue.
    //       </p>
    //     </div>
    //   </div>
    //   {/* 5 */}
    //   <div className=" flex pt-[10%] ">
    //     <h1 className="text-8xl text-[#Ff0021] px-10">1965</h1>
    //     <div>
    //       <div className="border absolute border-gray-400 h-screen mt-8 -ml-0.5  "></div>
    //       <p className="text-3xl tracking-wide text-[#34493c] ml-20">
    //         Established of diplomatic…
    //       </p>
    //     </div>
    //   </div>
    //   {/* 6 */}
    //   <div className=" flex pt-[10%] ">
    //     <h1 className="text-8xl text-[#Ff0021] px-10">2014</h1>
    //     <div>
    //       {/* <div className="border absolute border-gray-400 h-screen  "></div> */}
    //       <p className="text-3xl tracking-wide text-[#34493c] ml-20">
    //         Levente Magyar, …
    //       </p>
    //     </div>
    //   </div>
    //   {/* 7 */}
    //   <div className=" flex pt-[10%] ">
    //     <h1 className="text-8xl text-[#Ff0021] px-10">2015</h1>
    //     <div>
    //       {/* <div className="border absolute border-gray-400 h-screen  "></div> */}
    //       <p className="text-3xl tracking-wide text-[#34493c] px-[10%]">
    //         2015, Hungary and Pakistan signed a memorandum of understanding on
    //         higher education and scientific exchange program, which gives the
    //         framework of the so-called…
    //       </p>
    //     </div>
    //   </div>
    //   {/* 8 */}
    //   <div className=" flex pt-[10%] ">
    //     <h1 className="text-8xl text-[#Ff0021] px-10">2016</h1>
    //     <div>
    //       {/* <div className="border absolute border-gray-400 h-screen  "></div> */}
    //       <p className="text-3xl tracking-wide text-[#34493c] px-[10%]">
    //         The chairman of the water and power development authorty (WAPDA),
    //         the chairperson…
    //       </p>
    //     </div>
    //   </div>
    //   {/* 9 */}
    //   <div className=" flex pt-[10%] ">
    //     <h1 className="text-8xl text-[#Ff0021] px-10">2017</h1>
    //     <div>
    //       <div className="border absolute border-gray-400 h-[35%] mt-8 -ml-0.5  "></div>
    //       <p className="text-3xl tracking-wide text-[#34493c] px-[10%]">
    //         Deputy State Secretary for opening to the south…
    //       </p>
    //     </div>
    //   </div>
    //   {/* 10 */}
    //   <div className=" flex pt-[15%] ">
    //     <h1 className="text-8xl text-[#27362d] px-10">2023</h1>
    //     <div>
    //       {/* <div className="border absolute border-gray-400 h-screen  "></div> */}
    //       <p className="text-3xl tracking-wide text-[#34493c] ml-20">Today, …</p>
    //     </div>
    //   </div>
    // </div>
  );
}

export default VerticalTimeline;
