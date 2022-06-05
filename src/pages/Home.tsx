import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Search from "../components/Search";

function Home() {
  return (
    <div className="w-full h-full">
      <Header />
      <Banner />
      <Search />
    </div>
  );
}

export default Home;
