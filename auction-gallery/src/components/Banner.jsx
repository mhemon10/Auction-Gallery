import React from "react";
import bannerImg from "../assets/banner-min.jpg";

const Banner = () => {
  return (
    <div
      className="w-full h-[90vh] bg-cover bg-center relative flex items-center"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="text-white ml-6 sm:ml-10 max-w-xs sm:max-w-md px-4 sm:px-0">
        <h1 className="text-2xl sm:text-4xl font-bold mb-3 leading-snug sm:leading-tight">
          Bid on Unique Items from <br className="hidden sm:block" /> Around the World
        </h1>
        <p className="text-sm sm:text-base mb-5">
          Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
        </p>
        <button className="bg-white text-black px-4 py-2 sm:px-5 sm:py-2 rounded-full font-semibold hover:bg-yellow-500 hover:text-white transition">
          Explore Auctions
        </button>
      </div>
    </div>
  );
};

export default Banner;
