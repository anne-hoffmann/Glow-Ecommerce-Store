"use client";

import React, { useContext, useEffect } from "react";
import Logo from "../assets/logo.png";
import cartIcon from "../assets/cart-icon.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ShopCategory from "../shopCategory/page";
import Cart from "../cart/page";
import LoginSignup from "../loginSignup/page";
import { ShopContext } from "../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const [authToken, setAuthToken] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("auth-token");
    setAuthToken(token);
  }, []);

  return (
    <div className="flex justify-between p-2 md:p-4 bg-[#d1ccd1] border-b-[1px] border-b-[#020200]">
      <div className="flex items-center gap-0 md:gap-2.5">
        <Image src={Logo} alt="logo" width={40} height={40} />
        <p className="text-[#020200] text-xl md:text-4xl font-light font-serif">
          Glow
        </p>
      </div>
      <ul className="flex items-center list-none gap-2 md:gap-12 font-light font-sans text-xs md:text-base">
        <li
          onClick={() => {
            setMenu("shop");
          }}
          className="hover:scale-110 transition ease-in-out"
        >
          <Link href="/shop">
            SHOP{menu === "shop" ? <hr className="bg-[#020200] h-1" /> : <></>}
          </Link>
        </li>
        <li
          onClick={() => {
            setMenu("face");
          }}
          className="hover:scale-110 transition ease-in-out"
        >
          <Link href="/face" element={<ShopCategory category="Face" />}>
            FACE{menu === "face" ? <hr className="bg-[#020200] h-1" /> : <></>}
          </Link>
        </li>
        <li
          onClick={() => {
            setMenu("body");
          }}
          className="hover:scale-110 transition ease-in-out"
        >
          <Link href="/body" element={<ShopCategory category="Body" />}>
            BODY{menu === "body" ? <hr className="bg-[#020200] h-1" /> : <></>}
          </Link>
        </li>
        <li
          onClick={() => {
            setMenu("hair");
          }}
          className="hover:scale-110 transition ease-in-out"
        >
          <Link href="/hair" element={<ShopCategory category="Hair" />}>
            HAIR{menu === "hair" ? <hr className="bg-[#020200] h-1" /> : <></>}
          </Link>
        </li>
      </ul>
      <div className="flex justify-evenly gap-3 items-center">
        <Link href="/cart" element={<Cart />}>
          <Image
            src={cartIcon}
            alt="cart-icon"
            width={40}
            height={40}
            className="hover:scale-110"
          />
        </Link>
        <div className="flex justify-center items-center md:w-5 md:h-5 text-xs md:text-sm md:rounded-xl md:bg-[#020200] md:text-[#ffffff] text-[#020200] font-sans">
          {getTotalCartItems()}
        </div>
        {/* {localStorage.getItem('auth-token')
            ?<button className='w-14 h-6 md:w-28 md:h-14 text-sm md:text-base bg-[#020200] hover:scale-110 transition ease-in-out  text-[#d1ccd1] rounded-full cursor-pointer my-auto font-sans' onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/shop')}}>Logout</button>
            :<Link href="/loginSignup" element={<LoginSignup/>}>
            <button className='w-14 h-6 md:w-28 md:h-14 text-sm md:text-base bg-[#020200] hover:scale-110 transition ease-in-out  text-[#d1ccd1] rounded-full cursor-pointer my-auto font-sans'>Login</button>
            </Link>} */}
        {authToken ? (
          <button
            className="w-14 h-6 md:w-28 md:h-14 text-sm md:text-base bg-[#020200] hover:scale-110 transition ease-in-out  text-[#d1ccd1] rounded-full cursor-pointer my-auto font-sans"
            onClick={() => setAuthToken("")}
          >
            Logout
          </button>
        ) : (
          <Link href="/loginSignup" element={<LoginSignup />}>
            <button className="w-14 h-6 md:w-28 md:h-14 text-sm md:text-base bg-[#020200] hover:scale-110 transition ease-in-out  text-[#d1ccd1] rounded-full cursor-pointer my-auto font-sans">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
