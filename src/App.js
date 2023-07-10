import "./App.css";
import { useState } from "react";
import TopNav from "../src/components/Header/TopNav";
import { News } from "./components/News/New";
import { Contribution } from "./components/Contribution/Contribution";
import { Events } from "./components/Events/Events";
import Footer from "./components/Footer/Footer";
import h1 from "../src/assets/h1.png";
import missionbg from "../src/assets/missionbg.jpg";
import eventbg from "../src/assets/eventbg.jpg";
import relationbg from "../src/assets/relationbg.jpg";
import teambg from "../src/assets/teambg.jpg";
import contactbg from "./assets/6_contact/anthony-fomin-yt0kE4YlVnI-unsplash.jpg";
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
import h2 from "./assets/0_home/h2.jpg";
import h3 from "./assets/0_home/h3.jpg";
import m1 from "./assets/1_mission/zalfa-imani-rFOtjUbYGSQ-unsplash.jpg";
import m2 from "./assets/1_mission/maranda-vandergriff-7aakZdIl4vg-unsplash.jpg";
import e1 from "./assets/2_events/dom-fou-YRMWVcdyhmI-unsplash.jpg";
import e2 from "./assets/2_events/luca-bravo-YoelVcKWmws-unsplash.jpg";
import r1 from "./assets/3_relations/qasim-nagori-1x3qakkpzZU-unsplash.jpg";
import r2 from "./assets/3_relations/muhammad-abdullah-HYzrAtfwjEk-unsplash.jpg";
import t1 from "./assets/5_team/redd-f-5U_28ojjgms-unsplash.jpg";
import t2 from "./assets/5_team/austin-kehmeier-lyiKExA4zQA-unsplash.jpg";
import c1 from "./assets/6_contact/richard-stachmann-8F_a_8esOkw-unsplash.jpg";
import c2 from "./assets/6_contact/adomas-aleno--ySLeov8m_8-unsplash.jpg";
import Contact from "./components/Contact.jsx/Contact";

const homeImages = [h2, h3];
const missionImages = [m1, m2];
const eventImages = [e1, e2];
const relationImages = [r1, r2];
const teamImages = [t1, t2];
const contactImages = [c1, c2];

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
            caroseldata={homeImages}
            title={"We aim at impactful trade."}
          />

          <div className="bg-[#e2e1dc]">
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
          </div>
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
            caroseldata={missionImages}
            underline={activeLink}
            title={"We believe in prosperous relationships."}
          />
          <CustomeTDR
            customeTitle={"The Mission that drives us"}
            description={`At Hungary Pakistan Business Council, we are passionate about creating a thriving business
            ecosystem that benefits both countries. We believe that by working together,
            we can unlock new opportunities for growth and success.`}
            textColor={"#34493c"}
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
            caroseldata={eventImages}
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
        </> //  Relations
      ) : activeLink === "relations" ? (
        <>
          <TopNav
            setActiveLink={setActiveLink}
            bgimg={relationbg}
            caroseldata={relationImages}
            underline={activeLink}
            title={"We think long term."}
          />
          <CustomeTDR
            customeTitle={"Diplomatic Relations"}
            description={``}
            textColor={`#Ff0021`}
            descriptionColor={"#34493c"}
            BgColor={""}
          />
          <VerticalTimeline />
          {/* <RelationPoint /> */}
          <Footer />
        </>
      ) : //  Team
      activeLink === "team" ? (
        <>
          <TopNav
            setActiveLink={setActiveLink}
            bgimg={teambg}
            caroseldata={teamImages}
            underline={activeLink}
            title={"We welcome change."}
          />
          <CustomeTDR
            customeTitle={"Meet the Team"}
            description={`As a group of qualified professionals from diverse backgrounds and disciplines,
            we bring extensive experience and knowledge to the table to uncover untapped business 
            opportunities between Pakistan and Hungary in order to strengthen economic ties
            between the nations in a sustainable and successful manner. 
            
            "We are convinced that a relationship can only be successful
            if it is based on mutual respect, fairness, and equality.`}
            textColor={`#34493c`}
            descriptionColor={"#536068"}
            BgColor={""}
          />
          <CustomeTeam setActiveLink={setActiveLink} />

          <CustomeTDR
            customeTitle={"Become a member"}
            description={`Join us in our mission to promote bilateral trade and investment between
              the two countries. Become a member of the Pakistan Hungary Business Council
              and start unlocking new opportunities for growth and success.`}
            textColor={`white`}
            descriptionColor={"white"}
            BgColor={"#34493c"}
          />

          <Footer />
        </> //  Contact us
      ) : activeLink === "contact" ? (
        <>
          <TopNav
            setActiveLink={setActiveLink}
            bgimg={contactbg}
            caroseldata={contactImages}
            underline={activeLink}
            title={"We believe in bilateral cooperation at eye level."}
          />
          <CustomeTDR
            customeTitle={"Contact"}
            description={`Please let us know if you have any questions 
            or would like more information about us and our activities.
            We will be happy to help and look forward to hearing from you.`}
            textColor={`#34493c`}
            descriptionColor={"#34493c"}
            BgColor={""}
          />
          <Contact />
          <Footer />
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
