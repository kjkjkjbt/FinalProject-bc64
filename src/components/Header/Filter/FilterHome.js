import React from "react";
import { useMediaQuery } from "react-responsive";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { showFilter } from "../../../redux/reducers/filterSlice";

export default function HomeFilter() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  let status = useSelector((state) => state.filter.status);

  let renderTablet = () => {
    if (status === "top-[-100px]") {
      return (
        <div
          onClick={() => dispatch(showFilter())}
          className="flex justify-center items-center px-3 py-1 border rounded-[1000px] space-x-3 font-medium text-[14px] cursor-pointer shadow-lg"
        >
          <span className="border-r pr-5 truncate">Any location</span>
          <span className="border-r pr-5 truncate">Any weeks </span>
          <span className="truncate">Guests </span>
          <span className="p-[8px] rounded-[50%] bg-[#FF385C] text-white">
            <AiOutlineSearch />
          </span>
        </div>
      );
    } else {
      return (
        <div
          onClick={() => dispatch(showFilter())}
          className="cursor-pointer flex space-x-5 text-[14px] lg:pl-16"
        >
          <p>Accomodation </p>
          <p>experience </p>
          <p>experience Online</p>
        </div>
      );
    }
  };

  let renderMobile = () => {
    if (status === "top-[-100px]") {
      return (
        <div style={{ padding: "14px 24px 0 24px" }}>
          <div
            onClick={() => dispatch(showFilter)}
            style={{ boxShadow: "0 3px 10px #0000001a" }}
            className="flex justify-between items-center bg-[#ffffff] border-[0.5px] border-solid border-[#00000014] rounded-[1000px] text-[#222222] min-h-[56px] min-w-[285px] cursor-pointer"
          >
            <div className="flex items-center">
              <div style={{ padding: "0 16px 0 20px" }}>
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style={{
                    display: "block",
                    height: "16px",
                    width: "16px",
                    fill: "currentcolor",
                  }}
                >
                  <path
                    d="M13 0c7.18 0 13 5.82 13 13 0 2.868-.929 5.519-2.502 7.669l7.916 7.917-2.828 2.828-7.917-7.916A12.942 12.942 0 0 1 13 26C5.82 26 0 20.18 0 13S5.82 0 13 0zm0 4a9 9 0 1 0 0 18 9 9 0 0 0 0-18z"
                    opacity=".8"
                  ></path>
                </svg>
              </div>
              <div>
                <div className="flex text-[15px] font-semibold ">
                  <p className="leading-4">Locations </p>
                </div>
                <div className="flex items-center text-[13px] ">
                  <p className="leading-4">Weeks </p>
                  <p className="leading-4 px-[5px]">.</p>
                  <p className="leading-4">Add guests </p>
                </div>
              </div>
            </div>
            <div>
              <button aria-label="filter" type="button">
                <div className="border border-solid border-[#dddddd] rounded-[25px] h-9 w-9 flex justify-center items-center mx-[10px]">
                  <div>
                    <svg
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      style={{
                        display: "block",
                        height: "16px",
                        width: "16px",
                        fill: "rgb(34, 34, 34)",
                      }}
                    >
                      <path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div
          onClick={() => dispatch(showFilter())}
          className="cursor-pointer flex justify-center items-center h-[70px] bg-white space-x-5 text-[14px] lg:pl-16"
        >
          <p>Accomodation </p>
          <p>experience</p>
          <p>experience online </p>
        </div>
      );
    }
  };

  let dispatch = useDispatch();
  return <div>{isMobile ? renderMobile() : renderTablet()}</div>;
}
