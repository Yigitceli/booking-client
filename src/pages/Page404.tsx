import React from "react";
import { BiSad } from "react-icons/bi";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Page404() {
  return (
    <div className="w-full h-screen flex flex-col">
      <Header />
      <div className="h-full w-full flex flex-col items-center justify-center gap-4">
        <BiSad fontSize={"6em"}/>
        <h1 className="text-3xl font-bold">404 Page Not Found</h1>
      </div>
      <Footer />
    </div>
  );
}

export default Page404;
