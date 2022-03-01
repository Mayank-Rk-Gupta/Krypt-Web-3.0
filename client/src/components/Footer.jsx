import React from "react";

import logo from "../../images/logo.png";
import github from "../../images/github.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo} alt="logo" className="w-32" />
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">

        <a href="https://coinmarketcap.com/currencies/ethereum/historical-data/" className="text-white text-base text-center mx-2 cursor-pointer" target="_blank">Market</a>
        <a href="https://coinmarketcap.com/rankings/exchanges/" className="text-white text-base text-center mx-2 cursor-pointer" target="_blank">Exchange</a>
        <a href="https://www.youtube.com/c/CoinMarketCapOfficial" className="text-white text-base text-center mx-2 cursor-pointer" target="_blank">Tutorials</a>
        <a href="https://coinmarketcap.com/currencies/ethereum/wallets/" className="text-white text-base text-center mx-2 cursor-pointer" target="_blank">Wallets</a>
        
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">Come join us and hear for the unexpected miracle</p>
      <p className="text-white text-sm text-center font-medium mt-2">info@kryptEth.com</p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
    <p className="text-white text-left text-xs">
        © Copyright<a href="https://www.linkedin.com/in/mayank-gupta-156999192/" target="_blank"><b> Mayank</b> </a> </p>
      <a href="https://github.com/Mayank-Rk-Gupta" target="_blank"><img src={github} alt ="github" className="text-center text-xs"></img></a>
      <p className="text-white text-right text-xs">All rights reserved</p>
      
    </div>
  </div>
);

export default Footer;