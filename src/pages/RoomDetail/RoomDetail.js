import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { roomService } from "../../services/roomService";
import { FaStar, FaShower, FaSwimmingPool } from "react-icons/fa";
import { FiShare, FiHeart } from "react-icons/fi";
import { IoBedOutline, IoPeopleOutline, IoWifiOutline } from "react-icons/io5";
import { CiForkAndKnife } from "react-icons/ci";
import { GiWashingMachine } from "react-icons/gi";
import { TbIroning3, TbAirConditioning, TbParking } from "react-icons/tb";
import { SlScreenDesktop } from "react-icons/sl";
import { Rate, message } from "antd";
import { locationService } from "../../services/LocationService";
import { commentService } from "../../services/CommentService";
import { pickRoomService } from "../../services/PickRoomService";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import moment from "moment/moment";
import ShowDatePicker from "./ShowDatePicker";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];
const MySwal = withReactContent(Swal);

export default function RoomDetail() {
  let param = useParams();
  const [room, setRoom] = useState({});
  const [location, setLocation] = useState({});
  const [review, setReview] = useState([]);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [guest, setGuest] = useState(1);
  const [startD, setStartD] = useState("dd/mm/yyyy");
  const [endD, setEndD] = useState("dd/mm/yyyy");
  const [days, setDays] = useState(0);

  useEffect(() => {
    roomService
      .getRoomDetail(param.id)
      .then((res) => {
        setRoom(res.data.content);
      })
      .catch((err) => {});
    commentService
      .getCommentLocation(param.id)
      .then((res) => {
        setReview(res.data.content);
      })
      .catch((err) => {});
  }, []);

  useEffect(() => {
    locationService
      .getLocationDetail(room.maViTri)
      .then((res) => {
        setLocation(res.data.content);
      })
      .catch((err) => {});
  }, [room]);

  let randomRate = (min, max) => {
    return Math.floor((Math.random() * (max - min) + min) * 100) / 100;
  };

  let renderTienIch = (item, name) => {
    if (item) {
      return <span className="item">{name}</span>;
    } else {
      return <span className="item line-through">{name}</span>;
    }
  };

  let renderReview = () => {
    return review.map((item) => {
      return (
        <div className="space-y-4">
          <div className="flex space-x-4 flex-wrap">
            {/* ava */}
            <div className="ava">
              <img src={item.avatar} alt="Avatar" />
            </div>
            {/* ten + ngay  */}
            <div>
              <b>{item.tenNguoiBinhLuan}</b>
              <p>{item.ngayBinhLuan}</p>
            </div>
            {/* rate */}
            <span>
              <Rate tooltips={desc} value={item.saoBinhLuan / 2} disabled />
            </span>
          </div>
          {/* noi dung */}
          <div className="comment">
            <p>{item.noiDung}</p>
          </div>
        </div>
      );
    });
  };

  let countGuest = (number) => {
    if (number === 1) {
      setGuest(guest + number);
    }
    if (number === -1) {
      if (guest > 1) {
        setGuest(guest + number);
      }
    }
  };
  let user = useSelector((state) => {
    return state.userSlice.account;
  });
  let checkLogin = () => {};
  let datPhong = () => {
    // check user
    if (!user) {
      return MySwal.fire({
        icon: "error",
        title: "Đăng nhập để đặt phòng!",
        footer: '<a href="/login">Đăng nhập ngay</a>',
      });
    } else {
      pickRoomService
        .postRoomOrder({
          maPhong: param.id,
          ngayDen: startD,
          ngayDi: endD,
          soLuongKhach: guest,
          maNguoiDung: user.user.id,
        })
        .then((res) => {
          MySwal.fire({
            icon: "success",
            title: "Đặt phòng thành công!",
          });
        })
        .catch((err) => {
          MySwal.fire({
            icon: "error",
            title: "Đặt phòng thất bại!",
          });
        });
    }
  };
  return (
    <div className="px-[5%] lg:px-[10%] space-y-10" id="roomDetailPage">
      {/* START TITILE SECTION */}
      <div className="roomDetailPage__title block space-y-3 lg:space-y-0 lg:flex lg:justify-between ">
        <div className="roomDetailPage__title--left">
          {/* <img src="http://www.w3.org/2000/svg" alt="" /> */}
          <div className="roomName space-y-2">
            <h1 className="text-[1.8rem] font-medium">{room.tenPhong}</h1>
            <div className="grid grid-cols-2  sm:flex sm:space-x-2 sm:space-y-0">
              <p className="rate flex items-center mb-2 sm:mb-0">
                <FaStar className="text-yellow-400 mr-1" />
                {randomRate(10, 5)}
              </p>
              <p className="hidden sm:inline-block font-medium">.</p>
              <p className=" font-medium underline  mb-2 sm:mb-0">
                <span>{Math.floor(randomRate(1, 10))}</span>
                <span> đánh giá</span>
              </p>
              <p className="font-medium hidden sm:inline-block">.</p>
              <p className="col-span-2 font-medium underline">
                {location.tenViTri}, {location.tinhThanh}, {location.quocGia}
              </p>
            </div>
          </div>
        </div>
        <div className="roomDetailPage__title--right flex space-x-4 items-end">
          <button className="flex space-x-2 items-center">
            <span>
              <FiShare />
            </span>
            <span className="underline">Chia sẻ</span>
          </button>
          <button className="flex space-x-2 items-center">
            <span>
              <FiHeart />
            </span>
            <span className=" underline">Lưu</span>
          </button>
        </div>
      </div>
      {/* END TITILE SECTION */}

      {/* START IMG SECTION */}
      <div className="roomDetailPage__img rounded-2xl	overflow-hidden">
        <img src={room.hinhAnh} alt="" className="w-full object-cover" />
      </div>
      {/* END IMG SECTION */}

      {/* START INFO SECTION */}
      <div className="roomDetailPage_info">
        <div className="grid grid-cols-3 gap-20">
          {/* START INFO LEFT SIDE */}
          <div class="col-span-3 xl:col-span-2 info-left-side space-y-7 ">
            {/* start title */}
            <div className="left-side__title space-y-2 ">
              <div className="left-side__title1 flex justify-between items-center">
                <div className="left-side__title-content">
                  <h2>
                    Phòng trong chỗ nghỉ phục vụ bữa sáng. Chủ nhà phục vụ
                  </h2>
                </div>
                <div className="left-side__title-ava">
                  <img src="https://i.pravatar.cc" alt="userAvatar" />
                </div>
              </div>
              <div className="left-side__title2 ">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {/* item 1 */}
                  <div className="item item-1">
                    <IoBedOutline />
                    <span> {room.giuong} Giường đôi</span>
                  </div>
                  {/* item 2 */}
                  <div className="item item-1">
                    <IoPeopleOutline />
                    <span> Tối đa {room.khach} khách </span>
                  </div>
                  {/* item 3 */}
                  <div className="item item-1">
                    <FaShower />
                    <span>{room.phongTam} Phòng tắm tách biệt</span>
                  </div>
                </div>
              </div>
            </div>
            {/* end title */}

            {/* start mo ta */}
            <div className="left-side__desc border-y border-[#dddddd] py-7 space-y-2">
              <h2>Mô tả</h2>
              <p>{room.moTa}</p>
            </div>
            {/* end mo ta */}

            {/* start tien ich */}
            <div className="left-side__tien-ich space-y-3">
              <h2>Nơi đây có những gì cho bạn</h2>
              <div className="grid grid-cols-2 space-y-2">
                {/* máy giặt */}
                <p className="item flex items-center">
                  <GiWashingMachine />
                  {renderTienIch(room.mayGiat, "Máy giặt")}
                </p>
                {/* bàn là */}
                <p className="item flex items-center">
                  <TbIroning3 />
                  {renderTienIch(room.banLa, "Bàn là")}
                </p>
                {/* tivi */}
                <p className="item flex items-center">
                  <SlScreenDesktop />
                  {renderTienIch(room.tivi, "Tivi")}
                </p>
                {/* điều hòa */}
                <p className="item flex items-center">
                  <TbAirConditioning />
                  {renderTienIch(room.dieuHoa, "Điều hòa")}
                </p>
                {/* wifi */}
                <p className="item flex items-center">
                  <IoWifiOutline />
                  {renderTienIch(room.wifi, "Wifi")}
                </p>
                {/* bếp */}
                <p className="item flex items-center">
                  <CiForkAndKnife />
                  {renderTienIch(room.bep, "Bếp")}
                </p>
                {/* đỗ xe */}
                <p className="item flex items-center">
                  <TbParking />
                  {renderTienIch(room.doXe, "Chỗ đổ xe")}
                </p>
                {/* hồ bơi */}
                <p className="item flex items-center">
                  <FaSwimmingPool />
                  {renderTienIch(room.hoBoi, "Hồ bơi")}
                </p>
              </div>
              <div className="button-tien-nghi">
                <button className="py-5 px-5 border font-bold rounded-xl hover:bg-[#F7F7F7]">
                  Hiển thị tất cả 38 tiện nghi
                </button>
              </div>
            </div>
            {/* end tien ich */}
            {/* START REVIEW */}
            <div className="roomDetailPage__review space-y-3 border-y border-[#dddddd] py-7">
              <h2>Đánh giá</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                {renderReview()}
              </div>
            </div>
            {/* END REVIEW */}
          </div>
          {/* END INFO LEFT SIDE */}

          {/* START INFO RIGHT SIDE */}
          <div className="relative col-span-3 xl:col-span-1">
            <div className="sticky-item p-5 rounded-xl space-y-3 border border-gray-300 sticky top-[75px] left-0">
              {/* Giá */}
              <div className="gia text-xl flex">
                <h2 className=" font-bold">${room.giaTien}</h2>{" "}
                <h2 className="text-gray-500 font-normal">/ đêm</h2>
              </div>
              {/* Ngày nhận, trả */}
              <div className="datepicker grid grid-cols-2 relative">
                <button
                  className=" hover:bg-gray-200 pl-2 rounded-tl-lg border-gray-400 border py-2 border-r-0"
                  onClick={() => setShowDatePicker(!showDatePicker)}
                >
                  <h2 className="text-left ">Nhận phòng</h2>
                  <p className="text-left ">
                    {startD === "dd/mm/yyyy"
                      ? "dd/mm/yyyy"
                      : moment(startD).format("DD/MM/YYYY")}
                  </p>
                </button>
                <button
                  className=" hover:bg-gray-200 rounded-tr-lg pl-2 border-gray-400 border py-2 "
                  onClick={() => setShowDatePicker(!showDatePicker)}
                >
                  <h2 className="font-bold text-left">Trả phòng</h2>
                  <p className="text-left ">{endD}</p>
                </button>
                {/* {showDatePicker && (
                  <div className="col-span-2 ">
                    <ShowDatePicker
                      setStartD={setStartD}
                      setEndD={setEndD}
                      setDays={setDays}
                      setShowDatePicker={setShowDatePicker}
                    />
                  </div>
                )} */}
                <div className="numberGuest col-span-2 px-2 rounded-b-lg border-gray-400 border py-2 space-y-2 border-t-0">
                  <h2>Khách</h2>
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => {
                        countGuest(-1);
                      }}
                      className=" rounded-xl text-center text-xl font-bold bg-gray-300 text-white hover:bg-[#FD5861] duration-700	"
                      style={{
                        width: "32px",
                        height: "32px",
                        lineHeight: "32px",
                      }}
                    >
                      -
                    </button>
                    <p className="text-lg">{guest} khách</p>
                    <button
                      onClick={() => {
                        countGuest(1);
                      }}
                      className=" rounded-xl text-center text-xl font-bold bg-gray-300 text-white hover:bg-[#FD5861] duration-700	 "
                      style={{
                        width: "32px",
                        height: "32px",
                        lineHeight: "32px",
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              {/* Đặt phòng */}
              <div className="confirmOrder">
                <button
                  className="py-3 w-full bg-gradient-to-r from-[#e61e4d] via-[#e31c5f] to-[#d70466] text-center text-white rounded-lg text-2xl"
                  onClick={datPhong}
                >
                  Đặt phòng
                </button>
              </div>
              {/* Tính tiền */}
              <div className="sumPrice space-y-2">
                <div className="flex justify-between text-lg text-gray-500">
                  <p>
                    ${room.giaTien}&nbsp;x&nbsp; {days} đêm
                  </p>
                  <p>${room.giaTien * days}</p>
                </div>
                <div className="flex justify-between text-lg text-gray-500">
                  <p>{guest} khách</p>

                  <p>{Math.ceil(guest / room.khach)} phòng</p>
                </div>
                <div className="flex justify-between text-lg text-gray-500">
                  <p>Phí dịch vụ</p>
                  <p>$0</p>
                </div>
                <div className="flex justify-between pt-3 border-t border-gray-300">
                  <h2>Tổng trước thuế</h2>
                  <h2>
                    ${room.giaTien * days * Math.ceil(guest / room.khach)}
                  </h2>
                </div>
              </div>
            </div>
          </div>
          {/* END INFO RIGHT SIDE */}
        </div>
      </div>
      {/* END INFO SECTION */}

      {/* START MAP */}
      <div className="roomDetailPage__map space-y-4 pb-7">
        <h2>Nơi bạn sẽ đến</h2>
        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31353.06376270697!2d106.6928371!3d10.8011264!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175292969c6365f%3A0xa2a350d51940a725!2sEastin%20Grand%20Hotel%20Saigon!5e0!3m2!1svi!2s!4v1686033436710!5m2!1svi!2s"
            height={450}
            style={{ border: 0, width: "100%" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      {/* END MAP */}
    </div>
  );
}
