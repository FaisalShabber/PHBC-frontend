import "./App.css";
import TopNav from "../src/components/Header/TopNav";
import { News } from "./components/News/New";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { Contribution } from "./components/Contribution/Contribution";
import { Events } from "./components/Events/Events";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <TopNav />
      <AboutUs />
      <News />
      <Contribution />
      <Events />
      <Footer />
    </>
  );
}

export default App;
