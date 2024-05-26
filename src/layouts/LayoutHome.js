import React from "react";
import { useMediaQuery } from "react-responsive";
import Footer from "../components/Footer/Footer";
import HeaderHome from "../components/Header/HeaderHome/HeaderHome";

export default function LayoutHome({ Components }) {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <>
      <HeaderHome />
      <div className={`flex-grow ${isMobile ? "pt-[80px]" : "pt-[80px]"}`}>
        <Components />
      </div>
      <Footer />
    </>
  );
}
