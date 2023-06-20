import React from "react";
import Twitter from "../assets/twitter.svg"
import Github from "../assets/github.svg"

const Footer = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-black py-4">
      <p className="text-white">Developer by Thorlani</p>
      <ul className="w-[100px] flex justify-between my-[-8px]">
        <li className="list-none">
          <a href="https://twitter.com/Thorlanii" target="_blank" rel="noopener noreferrer">
            <img src={Twitter} alt="twitter" width={25} height={25} />
          </a>
        </li>
        <li className="list-none">
          <a href="https://github.com/Thorlani" target="_blank" rel="noopener noreferrer">
            <img src={Github} alt="github" width={25} height={25} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
