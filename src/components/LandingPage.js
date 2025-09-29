// LandingPage.js
import React from "react";
//import backgroundImage from "../img/background.jpg";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import Financing from "./Financing";
import LoanProcess from "./LoanProcess";
import WorkingProcess from "./WorkingProcess";
import ReviewSlider from "./ReviewSlider";
import Partners from "./Partners";
import LatestTrends from "./LatestTrends";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className=" overflow-hidden ">
      {/* <div
        className="bg-cover min-h-screen relative"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Navbar />
      </div> */}
      {/* Navbar & Footer now provided by Layout */}
      <HomePage />
      <Financing />
      {/* <LoanProcess /> */}
      <WorkingProcess />
      <ReviewSlider />
      <Partners />
      <LatestTrends />
      {/* Footer provided by Layout */}
    </div>
  );
};

export default LandingPage;
