import React from "react";
import { Carousel } from "antd";

const SliderPage = () => {
  return (
    <div className="text-center">
      <Carousel autoplay effect="fade" className="mt-20 ">
        <div className="flex justify-center items-center h-[300px]">
          <h1 className="text-2xl font-bold p-3">Welcome to Our Store</h1>
          <h1 className="text-2xl font-bold p-3">
            Best Products at Best Prices
          </h1>
        </div>
        <div className="flex justify-center items-center h-[300px]">
          <h1 className="text-2xl font-bold p-3">Enjoy Exclusive Discounts</h1>
          <h1 className=" text-2xl font-bold p-3">Shop Now!</h1>
        </div>
      </Carousel>
    </div>
  );
};

export default SliderPage;
