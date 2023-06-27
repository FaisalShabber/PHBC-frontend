import "./App.css";
import { useState } from "react";
import TopNav from "../src/components/Header/TopNav";
import { News } from "./components/News/New";
// import { AboutUs } from "./components/AboutUs/AboutUs";
import { Contribution } from "./components/Contribution/Contribution";
import { Events } from "./components/Events/Events";
import Footer from "./components/Footer/Footer";
import h1 from "../src/assets/h1.png";
import missionbg from "../src/assets/missionbg.jpg";
import eventbg from "../src/assets/eventbg.jpg";
import relationbg from "../src/assets/relationbg.jpg";
import teambg from "../src/assets/teambg.jpg";
import fp1 from "../src/assets/fp1.png";
import fp2 from "../src/assets/fp2.png";
import fp3 from "../src/assets/fp3.png";
import mission1 from "../src/assets/mission1.jpg";
import mission2 from "../src/assets/mission2.jpg";
import mission3 from "../src/assets/mission3.jpg";
import mission4 from "../src/assets/mission4.jpg";
import mission5 from "../src/assets/mission5.jpg";
import mission6 from "../src/assets/mission6.jpg";
import CustomeTDR from "./components/CustomeTDR";
import CustomeEvent from "./components/CustomeEvent";
import CustomeTeam from "./components/CustomeTeam";
import VerticalTimeline from "./components/VerticalTimeline";
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
      readMore: `Read More`,
    },

    {
      title: `Lahore welcomed Istvan Grafjodi`,
      discription: `Jamil Ahmed Mayo warmly welcomed Istvan
Grafjodi in Lahore where he presented the concept paper that was higly appreciated by Istavan
Grafjodi and he said he will discuss with ambassador and get back with his working notes.`,
      photo: fp2,
      readMore: `Read More`,
    },
    {
      title: `First Meeting with Hungary‘s
Commercial Counsellor`,
      discription: `Jamil Ahmad Mayo’s first formal meet up with
Istvan Grafjodi, Commercial Counsellor at Hungary, to set up PHBC where Hungarian Business
counselor asked to mature the idea by giving
comprehensive concept paper.`,
      photo: fp3,
      readMore: `Read More`,
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
  const missions1 = [
    {
      title: `Sustainability`,
      discription: `We aim to promote bilateral trade between Hungary and Pakistan by creating a platform that
brings together businesses, entrepreneurs, and
investors from both countries. We organize trade missions, business forums, and networking
events to encourage collaboration and facilitate
business partnerships.`,
      photo: mission4,
    },
    {
      title: `Innovation`,
      discription: `We provide our members with valuable information on the latest market trends, regulatory
changes, investment opportunities, and business best practices. We believe that access
to reliable information is essential for making
informed business decisions.`,
      photo: mission5,
    },
    {
      title: `Integrity`,
      discription: `We believe in building sustainable partnerships
that benefit both Hungary and Pakistan. We encourage our members to develop partnerships
based on shared values, mutual respect, and a
commitment to long-term growth.`,
      photo: mission6,
    },
  ];
  return (
    <>
      {activeLink === "about" ? (
        <>
          {/* About */}
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
            textColor={"#536068"}
            descriptionColor={"#536068"}
            BgColor={"#e2e1dc"}
            customeReadMore={"Read More"}
          />
          <News
            news={news}
            CustomeNewsHeading={"What‘s News?"}
            CustomeArticleHeading={"To the articles"}
            readMore={"Read More"}
          />
          <Contribution />
          <Events setActiveLink={setActiveLink} />
          <Footer />
        </>
      ) : activeLink === "mission" ? (
        <>
          {/* ///Mission */}
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
            textColor={"#Ff0021"}
            descriptionColor={"#536068"}
            BgColor={""}
          />
          <News news={missions} />

          <div className="bg-[#640414]">
            <CustomeTDR
              customeTitle={"The future we imagine"}
              description={`Through our networking events, business forums, and trade missions,
            we aim to foster closer relationships and stronger partnerships between Pakistani
            and Hungarian businesses. We also provide market research, trade information,
            and other resources to help our members navigate the unique challenges
            and opportunities of doing business in each other‘s markets.`}
              textColor={"white"}
              descriptionColor={`white`}
              // BgColor="#640414"
            />
          </div>

          <div className="whitespace-pre-line">
            <CustomeTDR
              customeTitle={"The Values that guide us"}
              description={`Our vision is to create a dynamic business ecosystem that facilitates cross-border 
              trade investment, and innovation between Hungary and Pakistan. We believe that by 
              working together, we can unlock new opportunities and create lasting value for our
              members and the wider business community.We are committed to building a better 
              future for Hungary and Pakistan through sustainable business partnerships.

              Join us on this journey of growth and prosperity.`}
              textColor={`#34493c`}
              descriptionColor={"#536068"}
            />
          </div>
          <News news={missions1} />
          <Footer />
        </>
      ) : //  Events
      activeLink === "event" ? (
        <>
          <TopNav
            setActiveLink={setActiveLink}
            bgimg={eventbg}
            underline={activeLink}
            title={"We perceive challenges as chances."}
          />

          <CustomeEvent />

          <div className="bg-[#640414]">
            <CustomeTDR
              customeTitle={"The future we imagine "}
              description={`Through our networking events, business forums, and trade missions,
              we aim to foster closer relationships and stronger partnerships between Pakistani
              and Hungarian businesses. We also provide market research, trade information,
              and other resources to help our members navigate the unique challenges
              and opportunities of doing business in each other‘s markets.`}
              textColor={`white`}
              descriptionColor={"white"}
              BgColor={"#640414"}
            />
          </div>
          <Footer />
        </>
      ) : activeLink === "relations" ? (
        <>
          <TopNav
            setActiveLink={setActiveLink}
            bgimg={relationbg}
            underline={activeLink}
            title={"We think long term."}
          />
          <CustomeTDR
            customeTitle={"Diplomatic Relations"}
            description={`Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.
                Lorem ipsum. Lorem ipsum. Lorem ipsum.
                Lorem ipsum.`}
            textColor={`#Ff0021`}
            descriptionColor={"#34493c"}
            BgColor={""}
          />
          <VerticalTimeline />

          <Footer />
        </>
      ) : activeLink === "team" ? (
        <>
          <TopNav
            setActiveLink={setActiveLink}
            bgimg={teambg}
            underline={activeLink}
            title={"We welcome change."}
          />
          <CustomeTDR
            customeTitle={"Our Team"}
            description={`Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.
                Lorem ipsum. Lorem ipsum. Lorem ipsum.
                Lorem ipsum.`}
            textColor={`#34493c`}
            descriptionColor={"#536068"}
            BgColor={""}
          />
          <CustomeTeam />
          <Footer />
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
