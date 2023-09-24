import React from "react";
import HomeHeroImage from "@assets/images/home-hero.svg";

export const HomeHero: React.FC = () => {
  return (
    <section aria-label="HomeHero Section">
      <div className="pb-6 mb-4 border-b border-brand-black">
        <div className="relative mb-4 w-fit">
          <h1 className="text-4xl font-medium text-brand-black sm:text-5xl md:text-7xl">
            Kyiv
            <br /> LuxeBouquets
          </h1>
          <div className="absolute bottom-[23px] sm:bottom-[27px] md:bottom-[42px] right-[-18px] md:right-[-22px] flex h-[18px] md:h-[22px] w-[18px] md:w-[22px] flex-wrap content-center justify-center rounded-full border border-brand-black">
            <span className="text-xs font-semibold md:text-sm font-base text-brand-black">
              R
            </span>
          </div>
        </div>
        <p className="text-sm font-light text-brand-black md:text-lg">
          Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread
          Joy with Our{" "}
          <span className="italic">Online Flower Delivery Service</span>
        </p>
      </div>
      <div className="flex flex-row">
        <div className="flex-shrink-0 w-6/12 pr-4 border-r border-brand-black md:pr-6">
          <img src={HomeHeroImage} className="w-full h-full" alt="HomeHero" />
        </div>
        <div className="flex pl-4 md:pl-6">
          <p className="self-end text-xs font-light md:text-sm">
            Experience the joy of giving with our modern floral studio. Order
            online and send fresh flowers, plants and gifts today.
          </p>
        </div>
      </div>
    </section>
  );
};
