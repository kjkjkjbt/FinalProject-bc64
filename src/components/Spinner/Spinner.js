import React from "react";
import { useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";

export default function Spinner() {
  let { isLoading } = useSelector((state) => {
    return state.spinnerSlice;
  });
  return isLoading ? (
    <div
      style={{ background: "#fff" }}
      className="fixed z-[2500] w-screen h-screen top-0 left-0 flex justify-center items-center"
    >
      <BeatLoader size={30} color="#FF385C" />
    </div>
  ) : (
    <></>
  );
}
