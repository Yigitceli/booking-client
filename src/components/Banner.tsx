import React from "react";

function Banner() {
  return (
    <div className="w-full bg-[#003580] flex justify-center">
      <div className="max-w-[1024px] flex w-full text-white pb-3 flex-col gap-5 justify-start my-6">
        <h1 className="font-bold text-4xl">
          A lifetime of discounts? It's Genius.
        </h1>
        <h2>
          Get rewarded for your travels {"–"} unlock instant savings of 10% or more
          with a free Lamabooking account.
        </h2>
        <button className="w-32 p-2 text-sm bg-[#0874c4]">Sign in/Register</button>
      </div>
    </div>
  );
}

export default Banner;
