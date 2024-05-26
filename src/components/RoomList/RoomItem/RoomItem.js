import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function RoomItem({ room }) {
  const responsive = {
    superLargeDesktop: {
      // the name
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  let randomRate = (min, max) => {
    return Math.floor((Math.random() * (max - min) + min) * 100) / 100;
  };
  return (
    <div className="content-center relative cursor-pointer">
      {/* start hình ảnh phòng */}
      <div>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={responsive}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={true}
          sliderClass=""
          slidesToSlide={1}
          swipeable
          className="rounded-xl mb-2"
        >
          <NavLink to={`/RoomDetail/${room.id}`}>
            <div className="content-center h-[200px] relative">
              <img src={room.hinhAnh} className="h-full w-full" />
            </div>
          </NavLink>
          <NavLink to={`/RoomDetail/${room.id}`}>
            <div className="content-center h-[200px] relative">
              <img src={room.hinhAnh} className="h-full w-full" />
            </div>
          </NavLink>
          <NavLink to={`/RoomDetail/${room.id}`}>
            <div className="content-center h-[200px] relative">
              <img src={room.hinhAnh} className="h-full w-full" />
            </div>
          </NavLink>
          <NavLink to={`/RoomDetail/${room.id}`}>
            <div className="content-center h-[200px] relative">
              <img src={room.hinhAnh} className="h-full w-full" />
            </div>
          </NavLink>
        </Carousel>
        <button className="absolute right-3 top-3 text-white text-xl p-2 bg-[#9ca3af9e] rounded-full hover:bg-[#9ca3af] duration-700	 ">
          <FaRegHeart />
        </button>
      </div>
      {/* end hình ảnh phòng */}

      {/* start thông tin phòng */}
      <div>
        <NavLink to={`/RoomDetail/${room.id}`}>
          <div className="space-y-1">
            {/* tên phòng + rating */}
            <p className="flex space-x-1 justify-between">
              <span
                className="font-medium "
                style={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                {room.tenPhong}
              </span>
              <span className="flex items-center ">
                <FaStar className="text-yellow-400 mr-1" />
                {randomRate(10, 5)}
              </span>
            </p>
            {/* khoảng cách */}
            <p className="text-[#6B72A1]">
              Cách trung tâm: {Math.floor(randomRate(1, 2000))} km
            </p>
            {/* giá + chi tiết */}
            <div className="flex justify-between items-center">
              <p>
                <span className="font-medium">${room.giaTien}</span>
                <span> / night </span>
              </p>
              {/* <button className="text-gray-900  border border-gray-300 focus:outline-none  focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-2 py-1 bg-[#9ca3af9e] hover:bg-[#9ca3af]">
                Chi tiết phòng
              </button> */}
            </div>
          </div>
          {/* end thông tin phòng */}
        </NavLink>
      </div>
    </div>
  );
}
