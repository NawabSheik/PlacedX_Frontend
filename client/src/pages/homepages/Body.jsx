import React from "react";
import { Link } from "react-router-dom";
import { computerGif, studentGIF } from "../../constants";
import SocialHandles from "../../components/social-handles";
import { ArrowRight } from "lucide-react";

const Body = () => {
  return (
    <div className="flex-center max-sm:flex-col max-sm:justify-between  gap-[10vw] py-20 bg-black">
      {/* left side */}

      <div className="w-[90%] flex flex-col gap-4 max-sm:w-4/5 justify-around p-6 mt-20">
        {/* Placement Nexus heading */}
        <div className="font-extrabold text-[6vw] max-sm:text-[11vw] text-neutral-100 text-center">
          <h1 className="opacity-95">PlacedX</h1>
        </div>
        <p className="text-[1.5vw] font-medium text-neutral-100 m-1 max-sm:text-[4vw] text-center">
         A College Hiring Placement Platform
        </p>
        <div className="text-sm text-justify bg-black flex-col text-white   p-4 max-sm:p-2 max-sm:text-[2vw] rounded-md text-neutral-800 flex-center">
          <p className="text-center text-xl">
          Welcome to PlacedX, your gateway to a successful career. Explore tailored placement opportunities, connect with industry leaders, and unlock your potential in today's competitive job market. Step into a future filled with endless possibilities and growth with PlacedX.
          </p>
          
          
        </div>
        <div className="flex-center">
        <SocialHandles nameDisable={true} />
        </div>
        <div className="flex-center">
        <Link
          to={"/about"}
          className="text-neutral-700 bg-black-300 hover:bg-gray-500 hover:text-pink-50 rounded text-[1vw] max-sm:text-[2vw] 
          w-fit p-3 px-6 font-semibold flex items-center gap-2"
        >
          PROJECT BACKGROUND
          <ArrowRight size={20} />
        </Link>
        </div>
      </div>

      {/* right image */}
      
    </div>
  );
};
export default Body;
