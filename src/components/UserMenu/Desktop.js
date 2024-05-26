import React, { useState } from "react";
import { BiGlobe } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { localService } from "../../services/LocalService";

export default function UserMenuDeskTop() {
  const [status, setStatus] = useState("none");
  let user = localService.get();
  let handlePopup = () => {
    if (status === "none") {
      setStatus("block");
    } else {
      setStatus("none");
    }
  };

  let renderPopup = () => {
    return (
      <div
        style={{ display: status }}
        className="absolute bg-white right-10 top-16 shadow-md rounded-lg"
      >
        <div className="flex flex-col border-b p-3 pr-10 space-y-3">
          <NavLink
            className="font-medium hover:text-[#FF385C] duration-500"
            to="/register"
          >
            Register 
          </NavLink>
          <NavLink to="/login" className="hover:text-[#FF385C] duration-500">
            Log In 
          </NavLink>
        </div>
        <div className="flex flex-col p-3 pr-10 space-y-3">
          <NavLink to="/" className="hover:text-[#FF385C] duration-500">
          Rent accommodation through Airbnb
          </NavLink>
          <NavLink className="hover:text-[#FF385C] duration-500" to="/">
            Support 
          </NavLink>
        </div>
      </div>
    );
  };

  let handleSignOut = () => {
    localService.remove();
    window.location.reload();
  };
  let renderPopupLogin = () => {
    return (
      <div
        style={{ display: status }}
        className="absolute bg-white right-10 top-16 shadow-md rounded-lg"
      >
        <div className="flex flex-col border-b p-3 pr-10 space-y-3">
          <NavLink
            className="font-medium hover:text-[#FF385C] duration-500"
            to="/PersonnalInfoPage"
          >
            {user.user.email}
          </NavLink>
        </div>
        <div className="flex flex-col border-b p-3 pr-10 space-y-3">
          <NavLink
            className="font-medium hover:text-[#FF385C] duration-500"
            to="/TicketUser"
          >
            Booking history
          </NavLink>
          <NavLink
            to="/PersonnalInfoPage"
            className=" font-medium hover:text-[#FF385C] duration-500"
          >
            Personal Information 
          </NavLink>
        </div>
        <div className="flex flex-col border-b p-3 pr-10 space-y-3">
          <NavLink to="/" className="hover:text-[#FF385C] duration-500">
            Rent Accomodation via Airbnb
          </NavLink>
          <NavLink to="/" className="hover:text-[#FF385C] duration-500">
            Support 
          </NavLink>
        </div>
        <div className="p-3 hover:text-[#FF385C] duration-500">
          <NavLink onClick={handleSignOut}>Log Out </NavLink>
        </div>
      </div>
    );
  };
  let renderAvatar = () => {
    if (!user) {
      return (
        <div
          onClick={handlePopup}
          className="flex items-center z-[1500] p-2 border rounded-[1000px] space-x-2 cursor-pointer hover:shadow-md duration-500"
        >
          <div>
            <AiOutlineMenu />
          </div>
          <div className="text-[20px]">
            <IoPersonOutline />
          </div>
        </div>
      );
    } else {
      return (
        <div
          onClick={handlePopup}
          className="p-2 border rounded-full hover:shadow-lg duration-500"
        >
          <img
            className="w-5"
            src={
              user.user.avatar !== ""
                ? user.user.avatar
                : "../img/airbnb.svg"
            }
            alt=""
          />
        </div>
      );
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center space-x-4 ">
        <div className="cursor-pointer text-[14px] font-medium hidden lg:block">
          Rent Accomodation via Airbnb
        </div>
        <div className="cursor-pointer">
          <BiGlobe />
        </div>
        {renderAvatar()}
      </div>
      {/* popup  */}
      {user ? renderPopupLogin() : renderPopup()}
      {/* {renderPopup()} */}
      {/* {renderPopupLogin()} */}
    </div>
  );
}
