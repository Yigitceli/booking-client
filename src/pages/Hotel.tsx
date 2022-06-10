import React, { useState } from "react";
import Header from "../components/Header";
import { IoLocationSharp } from "react-icons/io5";
import Footer from "../components/Footer";
import Slider from "../components/Slider";

const photos = [
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
  },
];

function Hotel() {
  const [photoIndex, setPhotoIndex] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);

  const photoClickHandler = (index: number) => {
    setOpen(true);
    setPhotoIndex(index);
  };

  return (
    <div className="w-full h-full flex flex-col items-center">
      <Header />
      <div className="max-w-[1024px] w-full flex flex-col my-5">
        <div className="flex">
          <div className="flex-1 flex flex-col gap-1 mb-3">
            <h1 className="text-[24px] font-bold">Tower Street Apartments</h1>
            <div className="flex items-center gap-1">
              <IoLocationSharp />
              <span className="text-xs">Elton St 125 New york</span>
            </div>
            <h3 className="text-[#2973c2] font-medium">
              Excellent location {"-"} 500m from center
            </h3>
            <h3 className="text-[#12842f] font-medium">
              Book a stay over $114 at this property and get a free airport taxi
            </h3>
          </div>
          <div className="flex-1 flex justify-end items-center">
            <button className="bg-[#0874c4] text-white font-semibold px-5 py-3 rounded-md text-sm">
              Reserve or Book Now!
            </button>
          </div>
        </div>
        <div className="flex flex-wrap justify-between">
          {photos.map((photo, index) => (
            <div
              className="w-[33%] cursor-pointer hover:scale-105 transition-all ease-in-out duration-100"
              onClick={(e) => photoClickHandler(index)}
            >
              <img src={photo.src} className="object-cover mb-1" />
            </div>
          ))}
        </div>
        <div className="w-full flex py-4 justify-between h-72 ">
          <div className="flex-[3] mr-1 flex flex-col justify-center">
            <div className="w-full h-3/4 flex flex-col justify-between">
              <h1 className="text-2xl font-bold">Stay in the heart of City</h1>
              <p className="text-[14px]">
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-col ml-1 bg-[#f0f4fc] p-4 justify-between">
            <h1 className="text-[#555555] font-bold text-lg">
              Perfect for a 9-night stay!
            </h1>
            <p className="text-[14px]">
              Located in the real heart of Krakow, this property has an
              excellent location score of 9.8!
            </p>
            <span className="text-2xl">
              <strong>$945</strong> (9 nights)
            </span>
            <button className="bg-[#0874c4] text-white font-semibold px-5 py-3 rounded-md text-sm">
              Reserve or Book Now!
            </button>
          </div>
        </div>
      </div>
      <Footer />
      {open && (
        <Slider setOpen={setOpen} photos={photos} index={photoIndex} setIndex={setPhotoIndex} />
      )}
    </div>
  );
}

export default Hotel;
