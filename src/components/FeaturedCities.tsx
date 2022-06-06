import React from "react";

function FeaturedCities() {
  return (
    <div className="max-w-[1024px] w-full flex mt-12 gap-4 justify-between text-white font-bold text-3xl">
      <div className="transition-all duration-100 hover:scale-105 cursor-pointer flex relative flex-1 h-[250px] rounded-xl overflow-hidden">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
          alt=""
          className="absolute w-full h-full object-cover z-0"
        />
        <div className="absolute z-10 bottom-5 left-4">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="transition-all duration-100 hover:scale-105 cursor-pointer flex relative flex-1 h-[250px] rounded-xl overflow-hidden">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
          alt=""
          className="absolute w-full object-cover z-0"
        />
        <div className="absolute z-10 bottom-5 left-4">
          <h1>Reno</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className="transition-all duration-100 hover:scale-105 cursor-pointer flex relative flex-1 h-[250px] rounded-xl overflow-hidden">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
          alt=""
          className="absolute w-full object-cover z-0"
        />
        <div className="absolute z-10 bottom-5 left-4">
          <h1>Austin</h1>
          <h2>532 properties</h2>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCities;
