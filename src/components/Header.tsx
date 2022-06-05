import React, { useState } from "react";
import { FaBed } from "react-icons/fa";
import { IoAirplane } from "react-icons/io5";
import { useLocation } from "react-router-dom";

const items = [
  { icon: <FaBed />, itemName: "Stays" },
  { icon: <IoAirplane />, itemName: "Flights" },
];

function Header() {
  const [activeItem, setActiveItem] = useState<"Stays" | "Flights">("Stays");
  const location = useLocation();

  console.log(location);
  return (
    <div className="w-full bg-[#003580] flex justify-center">
      <div className="max-w-[1048px] flex w-full text-white p-3 flex-col gap-8">
        {/* Header Starts */}
        <div className="w-full flex justify-between items-center">
          <h2 className="font-medium">yigitbooking</h2>
          <div className="flex gap-4 justify-between text-[#003580] text-sm">
            <button className="bg-white px-2 py-1">Register</button>
            <button className="bg-white px-2 py-1">Login</button>
          </div>
        </div>
        {/* Items Starts */}
        <div className="w-full flex items-center gap-8">
          {items.map((item) => (
            <button
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
