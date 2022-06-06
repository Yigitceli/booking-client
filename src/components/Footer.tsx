import React from "react";

function Footer() {
  return (
    <div className="w-full bg-[#083484] mt-14 flex justify-center">
      <div className="w-full max-w-[1024px] flex flex-col items-center text-white gap-6 p-10">
        <h1 className="text-4xl font-bold">Save time, save money!</h1>
        <h3>Sign up and we'll send the best deals to you</h3>
        <div className="flex gap-4">
          <input placeholder="Your Email" className="w-80 focus:outline-none text-slate-700 p-2 rounded-lg"/>
          <button className="bg-[#0874c4] px-4 rounded-md">Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
