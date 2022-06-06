import React from "react";

function Browse() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-[1024px]">
      <h1 className="font-bold text-[1.3em]">Browse by property type</h1>
      <div className="flex w-full gap-4 text-slate-700">
        <div className="flex flex-col flex-1 overflow-hidden rounded-lg">
          <img
            src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
            alt=""
            className="h-[150px]"
          />
          <h3 className="font-bold">Hotels</h3>
          <p>233 hotels</p>
        </div>
        <div className="flex flex-col flex-1 overflow-hidden rounded-lg">
          <img
            src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
            alt=""
            className="h-[150px]"
          />
          <h3 className="font-bold">Apartments</h3>
          <p>233 hotels</p>
        </div>
        <div className="flex flex-col flex-1 overflow-hidden rounded-lg">
          <img
            src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
            alt=""
            className="h-[150px]"
          />
          <h3 className="font-bold">Resorts</h3>
          <p>233 hotels</p>
        </div>
        <div className="flex flex-col flex-1 overflow-hidden rounded-lg">
          <img
            src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"
            alt=""
            className="h-[150px]"
          />
          <h3 className="font-bold">Villas</h3>
          <p>233 hotels</p>
        </div>
        <div className="flex flex-col flex-1 overflow-hidden rounded-lg">
          <img
            src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
            alt=""
            className="h-[150px]"
          />
          <h3 className="font-bold">Cabins</h3>
          <p>233 hotels</p>
        </div>
      </div>
    </div>
  );
}

export default Browse;
