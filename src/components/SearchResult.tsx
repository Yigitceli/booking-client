import React from "react";

function SearchResult() {
  return (
    <div className="border-solid border-slate-300 border-[1px] rounded-lg w-full h-56 p-[10px] mb-[20px] flex gap-5">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="object-cover flex-1"
      />
      <div className="flex flex-col w-full h-full flex-[2] justify-between">
        <h1 className="text-2xl">Tower Street Apartments</h1>
        <p className="text-xs">500m from center</p>
        <p className="text-sm">Free airport taxi</p>
        <p className="text-sm">Studio Apartment with Air conditioning</p>
        <p className="text-xs">Entire studio • 1 bathroom • 21m² 1 full bed</p>
        <p className="text-sm">Free Cancellation</p>
        <p className="text-xs">
          You can cancel later, so lock in this great price today!
        </p>
      </div>
      <div className="flex-1 flex-col flex justify-between">
        <div className="flex w-full justify-between">
          <span>Excellent</span>
          <span className="bg-[#053484] px-1 flex items-center text-white font-medium">
              8.9
            </span>
        </div>
        <div className="flex flex-col text-right w-full gap-1">
          <span className="text-2xl">$112</span>
          <span className="text-xs text-slate-600">Includes taxes and fees</span>
          <button className="bg-[#0874c4] p-2 text-white font-semibold rounded-md">See avaliability</button>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
