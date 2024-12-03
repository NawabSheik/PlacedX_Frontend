import React from "react";
import CommonAuthCard from "../components/CommonAuthCard";
import Navbar from "../../src/components/header/Navbar";
import { authCardDetails } from "../constants";
function MainSignUp() {
  return (
    <section className=" flex flex-col min-h-screen py-16 justify-center w-screen bg-black ">
      <Navbar />

      <h3 className="text-2xl sm:text-4xl max-sm:mt-10 text-center font-bold text-white">
        SIGN UP 
      </h3>

      <div className=" flex justify-evenly items-center max-sm:flex-col gap-4 px-4 mt-8 sm:mt-12">
        {authCardDetails.signup.map((eachSignupDetail) => (
          <CommonAuthCard
            key={eachSignupDetail.btnLabel}
            imgSrc={eachSignupDetail.imgSrc}
            btnLabel={eachSignupDetail.btnLabel}
            btnColour={eachSignupDetail.btnColour}
            redirectRoute={eachSignupDetail.redirectRoute}
          />
        ))}
      </div>
    </section>
  );
}

export default MainSignUp;
