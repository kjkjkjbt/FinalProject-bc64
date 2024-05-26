import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { roomService } from "../../services/roomService";
import RoomItem from "../../components/RoomList/RoomItem/RoomItem";

export default function RoomByCity() {
  let city = useSelector((state) => state.filter.cityName);
  let params = useParams();
  let [room, setRoom] = useState([]);
  useEffect(() => {
    roomService
      .getRoomOfLocation(params.id)
      .then((res) => {
        setRoom(res.data.content);
      })
      .catch((err) => {});
  }, [params]);

  let renderContent = () => {
    if (room.length !== 0) {
      document.getElementById("map")?.classList.remove("md:hidden");
      return `List of rooms in the area ${city}`;
    } else {
      document.getElementById("map")?.classList.add("md:hidden");
      return `There are no more rooms available in the area ${city}`;
    }
  };

  return (
    <div className="px-5 md:px-8">
      <div className="text-center pb-6 font-medium">{renderContent()}</div>
      <div className="flex">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-2 auto-rows-max content-center md:w-1/2 md:mr-8">
          {room.map((item, index) => {
            return <RoomItem room={item} key={index} />;
          })}
        </div>
        <div id="map" className="w-1/2 hidden md:block">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7632681.71239111!2d104.05611139048933!3d15.956063999357486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31157a4d736a1e5f%3A0xb03bb0c9e2fe62be!2zVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1684950639297!5m2!1svi!2s"
            width="100%"
            height="100%"
            style={{ border: "0", borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
