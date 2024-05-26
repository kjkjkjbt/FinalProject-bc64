import React from "react";
import { useMediaQuery } from "react-responsive";
import Footer from "../components/Footer/Footer";
import HeaderOther from "../components/Header/HeaderOther/HeaderOther";

export default function Layout({ Components }) {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <div className="flex flex-col h-full min-h-screen">
      <HeaderOther />
      <div className={`flex-grow ${isMobile ? "pt-[80px]" : "pt-[80px]"}`}>
        <Components />
      </div>
      <Footer />
    </div>
  );
}
