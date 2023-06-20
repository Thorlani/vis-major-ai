import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./components/footer";

const Intro = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="w-full min-h-screen px-[8%] py-[4%] text-center">
      <h1 className="text-black">Vis Major</h1>
      <p className="text-black">
        Introducing <i>Vis Major</i> an innovative and cutting-edge AI web
        application designed to revolutionize the way we interact with
        technology. This groundbreaking platform harnesses the power of
        artificial intelligence to deliver a seamless and intuitive user
        experience. Whether you're seeking intelligent virtual assistance,
        advanced data analysis, or personalized recommendations, our AI web app
        is here to redefine what's possible. With its unparalleled capabilities,
        this transformative tool is set to reshape industries, enhance
        productivity, and unlock new levels of efficiency. Join us on a journey
        into the future as we explore the limitless potential of this AI-powered
        web application.
      </p>
      <div className="w-full flex items-center justify-center">
        <button
          onClick={() => navigate("/main")}
          className="bg-black w-[40%] text-white"
        >
          Get Started
        </button>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Intro;
