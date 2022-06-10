import React, { useState } from "react";
import { FaBed } from "react-icons/fa";
import { IoAirplane } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import {AiFillGoogleCircle} from "react-icons/ai"
import { Link } from "react-router-dom";

const items = [
  { icon: <FaBed />, itemName: "Stays" },
  { icon: <IoAirplane />, itemName: "Flights" },
];

function Header() {
  const [activeItem, setActiveItem] = useState<"Stays" | "Flights">("Stays");
  const location = useLocation();


  return (
    <div className="w-full bg-[#003580] flex justify-center">
      <div className="max-w-[1024px] flex w-full text-white p-3  flex-col gap-8">
        {/* Header Starts */}
        <div className="w-full flex justify-between items-center">
          <Link to={"/"}><h2 className="font-medium">yigitbooking</h2></Link>
          <div className="flex gap-4 justify-between text-[#003580] text-sm">
            
            <button className="bg-white px-2 py-1 flex gap-2 items-center">Sign In With Google <AiFillGoogleCircle fontSize={24} color="red"/></button>
          </div>
        </div>
        {/* Items Starts */}
        <div className="w-full flex items-center gap-8 pb-4">
          {items.map((item, index) => (
            <button
            key={index}
              className={
                activeItem === item.itemName
                  ? "flex items-center gap-2 text-xl border-[1px] border-white border-solid p-2 rounded-3xl"
                  : "flex items-center gap-2 text-xl border-white border-solid p-2 rounded-3xl"
              }
            >
              {item.icon}
              <p className="text-lg">{item.itemName}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
