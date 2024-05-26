import React, { useEffect, useState } from "react";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { localService } from "../../services/LocalService";

export default function UserMenuMobile() {
  const [status, setStatus] = useState("visible");
  const [status1, setStatus1] = useState("none");
  const [scroll, setScroll] = useState(0);
  const [nextScroll, setNextScroll] = useState(0);
  let user = localService.get();
  useEffect(() => {
    const handleScroll = (event) => {
      setNextScroll(scroll);
      setScroll(Math.floor(window.scrollY));
    };

    handleStatus();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  let handleStatus = () => {
    if (nextScroll < scroll) {
      setStatus("hidden");
    } else {
      setStatus("visible");
    }
  };
  let handlePopup = () => {
    if (status1 === "none") {
      setStatus1("block");
    } else {
      setStatus1("none");
    }
  };

  let handleSignOut = () => {
    localService.remove();
    window.location.reload();
  };
  let popUpLogin = () => {
    return (
      <div
        style={{ display: status1 }}
        className="absolute bg-white right-16 bottom-[58px] shadow-md rounded-lg text-[12px]"
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
          <NavLink onClick={handleSignOut}>Đăng xuất</NavLink>
        </div>
      </div>
    );
  };
  return (
    <div
      style={{ visibility: status }}
      className="fixed bottom-0 w-full bg-white shadow-2xl z-[1200]"
    >
      <div className="flex justify-evenly items-center   py-2">
        <NavLink to="/" className="flex flex-col justify-center items-center">
          <div>
            <AiOutlineSearch size={"24px"} />
          </div>
          <div className="text-xs">Discovery </div>
        </NavLink>
        <NavLink to="/" className="flex flex-col justify-center items-center">
          <div>
            <AiOutlineHeart size={"24px"} />
          </div>
          <div className="text-xs">Favourite </div>
        </NavLink>
        {!user ? (
          <NavLink
            to="/login"
            className="flex flex-col justify-center items-center"
          >
            <div>
              <IoPersonOutline size={"24px"} />
            </div>
            <div className="text-xs">Login </div>
          </NavLink>
        ) : (
          <NavLink
            onClick={handlePopup}
            className="flex flex-col justify-center items-center"
          >
            <img
              className="w-6"
              src={
                user.user.avatar !== ""
                  ? user.user.avatar
                  : "../img/airbnb-seeklogo.com.svg"
              }
              alt=""
            />
            <div className="text-xs">{user.user.name}</div>
          </NavLink>
        )}
      </div>
      {user ? popUpLogin() : <></>}
    </div>
  );
}
