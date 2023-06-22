import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from 'react-icons/ai';
import Navbar from "./Navbar";

const Header = ({ setActiveLink, bgimg, underline, title }) => {
  const [menu, setMenu] = useState(true);
  useEffect(()=>{
    
    if(window.innerWidth<650){

      setMenu(false)
    }else{
      setMenu(true)
    }
  },[])
  return (
    <div className="">
   
      <div
        className="bg-cover bg-center bg-no-repeat h-[50rem] lg:h-[50rem] 2xl:h-[60rem]"
        style={{ backgroundImage: `url(${bgimg})` }}
      >    <div className=" p-8 font-normal  text-[2rem] lg:hidden sm:hidden md:hidden text-[white] " onClick={()=>setMenu(!menu)}> <AiOutlineMenu /></div>
       {<Navbar
          setActiveLink={setActiveLink}
          underline={underline}
          title={title}
          shawMenu={menu}
        />}
      </div>
    </div>
  );
};
export default Header;
