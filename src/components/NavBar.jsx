import React, { useState } from 'react';
import {
  AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from 'react-icons/ai';
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import { FaWallet, FaUserFriends } from 'react-icons/fa';
import { MdFavorite, MdHelp } from 'react-icons/md';

const NavBar = () => {
  const [nav, setNav] = useState();

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 shadow-md   ">
      {/* left side menu.. */}

      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2 sm:text-3xl lg:text-4xl px-2 ">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black rounded-full text-white p-2">Delivery</p>
          <p className="p-2 ">Pickup</p>
        </div>
      </div>
      {/**b search icons and area */}
      <div className="items-center flex justify-between bg-gray-200 rounded-full py-1 px-2 max-w-[1200px] sm:w-[400px] lg:w-[500px] ">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 focus:outline-none w-full"
          type="text"
          placeholder="search Food "
        />
      </div>
      {/**  cart button start*/}
      <button className="bg-black text-white rounded-full py-2 hidden md:flex items-center ">
        <BsFillCartFill size={20} className="mr-2 " />
        Cart
      </button>
      {/**mobile menu */}
      {/* overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full  h-full z-10 top-0"></div>
      ) : (
        ''
      )}

      {/* side drawer menu */}
      <div
        className={
          nav
            ? 'fixed w-[300px] h-screen bg-white z-10 top-0 left-0  duration-300  '
            : 'fixed w-[300px] h-screen bg-white z-10 top-0 left-[-100%]  duration-300 '
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute fixed right-1 top-4 cursor-pointer "
        />
        <h1 className="flex items-center text-2xl ">
          Best <span className="font-bold"> Eats</span>
        </h1>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex">
              <TbTruckDelivery size={25} className="mr-4" />
              Orders
            </li>
            <li className="text-xl py-4 flex">
              <MdFavorite size={25} className="mr-4" />
              Favorite
            </li>
            <li className="text-xl py-4 flex">
              <FaWallet size={25} className="mr-4" />
              Wallet
            </li>
            <li className="text-xl py-4 flex">
              <AiFillTag size={25} className="mr-4" />
              Help
            </li>
            <li className="text-xl py-4 flex">
              <BsFillSaveFill size={25} className="mr-4" />
              Promotions
            </li>
            <li className="text-xl py-4 flex">
              <MdHelp size={25} className="mr-4" />
              Best One
            </li>
            <li className="text-xl py-4 flex">
              <FaUserFriends size={25} className="mr-4" />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
