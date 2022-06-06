import React from "react";
import Banner from "../components/Banner";
import Browse from "../components/Browse";
import FeaturedCities from "../components/FeaturedCities";
import FeaturedHotels from "../components/FeaturedHotels";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Search from "../components/Search";

function Home() {
  return (
    <div className="w-full h-full">
      <Header />
      <Banner />
      <Search />
      <div className="w-full flex justify-center flex-col items-center gap-6">
        <FeaturedCities />
        <Browse />
        <FeaturedHotels />
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
