import "./App.css";
import { react, useState } from "react";
import TopNav from "../src/components/Header/TopNav";
import { News } from "./components/News/New";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { Contribution } from "./components/Contribution/Contribution";
import { Events } from "./components/Events/Events";
import Footer from "./components/Footer/Footer";
import h1 from "../src/assets/h1.png";
import missionbg from "../src/assets/missionbg.jpg";
import eventbg from "../src/assets/eventbg.jpg";
import relationbg from "../src/assets/relationbg.jpg";
import fp1 from "../src/assets/fp1.png";
import fp2 from "../src/assets/fp2.png";
import fp3 from "../src/assets/fp3.png";
import mission1 from "../src/assets/mission1.jpg";
import mission2 from "../src/assets/mission2.jpg";
import mission3 from "../src/assets/mission3.jpg";
import CustomeTDR from "./components/CustomeTDR";
// import fp2 from "../../../src/assets/fp2.png";
// import fp3 from "../../../src/assets/fp3.png";
function App() {
  const [activeLink, setActiveLink] = useState("about");

  const news = [
    {
      title: `Hungary Ambassador
at CEO Summit Asia`,
      discription: `CEO Summit Asia, organized by CEO Club Pakistan with the agenda of „Turnaround Pakistan“
took place in Serena Hotel, Islamabad. 200 +
CEOs attended the event.Jamil Ahmed Mayo and
Istvan Grafjodi sat on HNL stall with description
of moving towards the implementation plan.`,
      photo: fp1,
    },

    {
      title: `Lahore welcomed Istvan Grafjodi`,
      discription: `Jamil Ahmed Mayo warmly welcomed Istvan
Grafjodi in Lahore where he presented the concept paper that was higly appreciated by Istavan
Grafjodi and he said he will discuss with ambassador and get back with his working notes.`,
      photo: fp2,
    },
    {
      title: `First Meeting with Hungary‘s
Commercial Counsellor`,
      discription: `Jamil Ahmad Mayo’s first formal meet up with
Istvan Grafjodi, Commercial Counsellor at Hungary, to set up PHBC where Hungarian Business
counselor asked to mature the idea by giving
comprehensive concept paper.`,
      photo: fp3,
    },
  ];
  const missions = [
    {
      title: `Promoting Trade`,
      discription: `We aim to promote bilateral trade between Hungary and Pakistan by creating a platform that
      brings together businesses, entrepreneurs, and
      investors from both countries. We organize trade missions, business forums, and networking
      events to encourage collaboration and facilitate
      business partnerships.`,
      photo: mission1,
    },
    {
      title: `Providing Information`,
      discription: `We provide our members with valuable information on the latest market trends, regulatory
      changes, investment opportunities, and business best practices. We believe that access
      to reliable information is essential for making
      informed business decisions.`,
      photo: mission2,
    },
    {
      title: `Creating Partnerships`,
      discription: `We believe in building sustainable partnerships
      that benefit both Hungary and Pakistan. We encourage our members to develop partnerships
      based on shared values, mutual respect, and a
      commitment to long-term growth.`,
      photo: mission3,
    },
  ];
  return (
    <>
      {activeLink === "about" ? (
        <>
          <TopNav
            setActiveLink={setActiveLink}
            underline={activeLink}
            bgimg={h1}
            title={"We aim at impactful trade."}
          />

          <CustomeTDR
            customeTitle={"Welcome to the Pakistan Hungary Business Council"}
            description={`Here, you will find information about our organization and its mission to foster
              strong economic ties between Pakistan and Hungary. Our council serves as a platform
              for businesses and professionals who are interested in exploring opportunities
              in Pakistan and Hungary. Through our online resources and networking events,
              we aim to provide a space for individuals to connect and exchange information
              about business trends, regulations, and market insights.`}
            textColor={" #536068"}
            descriptionColor={"#536068"}
            BgColor={"#e2e1dc"}
          />
          <News news={news} CustomeHeading={"What‘s new?"} />
          <Contribution />
          <Events />
          <Footer />
        </>
      ) : activeLink === "mission" ? (
        <>
          <TopNav
            setActiveLink={setActiveLink}
            bgimg={missionbg}
            underline={activeLink}
            title={"We believe in prosperous relationships."}
          />
          <CustomeTDR
            customeTitle={"The Mission that drives us"}
            description={`At Hungary Pakistan Business Council, we are passionate about creating a thriving business
            ecosystem that benefits both countries. We believe that by working together,
            we can unlock new opportunities for growth and success.`}
            textColor={"red"}
            descriptionColor={"#536068"}
            BgColor={""}
          />
          <News news={missions} />
          <Footer />
        </>
      ) : activeLink === "event" ? (
        <>
          <TopNav
            setActiveLink={setActiveLink}
            bgimg={eventbg}
            underline={activeLink}
            title={"We perceive challenges as chances."}
          />

          <Footer />
        </>
      ) : activeLink === "relations" ? (
        <>
          <>
            <TopNav
              setActiveLink={setActiveLink}
              bgimg={relationbg}
              underline={activeLink}
              title={"We think long term."}
            />

            <Footer />
          </>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
