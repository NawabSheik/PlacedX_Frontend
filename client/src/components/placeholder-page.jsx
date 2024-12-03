import React from "react";
import SocialHandles from "./social-handles";

export default function PlaceholderPage({ pageTitle }) {
  return (
    <div className="flex-center h-screen bg-black">
      <div className="flex flex-col items-center gap-2 text-lg text-white">
        <h3 className="text-3xl font-medium text-white opacity-100">{pageTitle}</h3>
        <h3 className="text-3xl font-medium text-white opacity-100">TEAM GIGABYTES</h3>
        <h3 className="text-2xl font-medium text-white opacity-100">Raghav Maheshwari :  maheshwariraghav885@gmail.com</h3>
        <h3 className="text-2xl font-medium text-white opacity-100">Rajul Jain : jainrajul2005@gmail.com</h3>
        <h3 className="text-2xl font-medium text-white opacity-100">Aafrin Khan : aafrin9086@gmail.com</h3>
        <h3 className="text-2xl font-medium text-white opacity-100">Neha Dadhich : dadhichneha971@gmail.com</h3>
        
      </div>
    </div>
  );
}
