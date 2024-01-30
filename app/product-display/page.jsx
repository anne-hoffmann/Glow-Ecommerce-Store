"use client";

import React, { useContext } from "react";
import Image from "next/image";
import BrightStar from "../assets/star-bright.png";
import DullStar from "../assets/star-dull.png";
import { ShopContext } from "../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  if (!product || !product.image) {
    return <div>Error: Product data is missing or invalid.</div>;
  }

  return (
    <div className="md:grid md:grid-cols-2 gap-4 p-9 bg-[#f5f1f2]">
      <div className="flex justify-center">
        <Image src={product.image} height={400} width={400} alt="product-img" />
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-4xl py-2">{product.name}</h1>
          <div className="flex py-2">
            <Image src={BrightStar} height={20} width={20} alt="bright-star" />
            <Image src={BrightStar} height={20} width={20} alt="bright-star" />
            <Image src={BrightStar} height={20} width={20} alt="bright-star" />
            <Image src={BrightStar} height={20} width={20} alt="bright-star" />
            <Image src={DullStar} height={20} width={20} alt="dull-star" />
            <p>(169)</p>
          </div>
          <div className="flex justify-start gap-3 text-2xl py-5 font-sans">
            <p>${product.new_price}</p>
            <p className="line-through">${product.old_price}</p>
          </div>
          <div>
            <p className="font-sans">{product.description}</p>
          </div>
        </div>
        <div>
          <button
            onClick={() => {
              addToCart(product.id);
            }}
            className="font-sans w-32 h-6 md:w-40 md:h-10 bg-[#020200] hover:scale-110 transition ease-in-out  text-white rounded-full cursor-pointer text-center mt-6"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
