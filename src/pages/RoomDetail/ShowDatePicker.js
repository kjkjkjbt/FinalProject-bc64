import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
// import { DateRangePicker } from "react-date-range";
import moment from "moment/moment";

export default function ShowDatePicker({
  setStartD,
  setEndD,
  setDays,
  setShowDatePicker,
}) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [sumDays, setSumDays] = useState("0");
  let selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  let handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
    setStartD(moment(ranges.selection.startDate).format());
    setEndD(moment(ranges.selection.endDate).format());
    countDays(ranges.selection.endDate, ranges.selection.startDate);
  };
  let countDays = (end, start) => {
    var Difference_In_Time = end - start;
    var Difference_In_Days = Math.ceil(Difference_In_Time / (1000 * 3600 * 24));
    if (Difference_In_Days === 0) {
      Difference_In_Days = 1;
    }
    setDays(Difference_In_Days);
    setSumDays(Difference_In_Days);
  };

  return (
    <div className="dayPickerComponent grid grid-cols-1 bg-white absolute top-0 left-[-70%] py-5 px-3 rounded-xl	space-y-4">
      <div>
        <div className="totalDays flex justify-between">
          <h2 className="pl-5 uppercase text-[#FD5861]">{sumDays} ngày</h2>
          <button
            className="bg-gray-300 font-medium rounded-xl duration-500 hover:bg-[#FD5861] text-white py-2 px-3"
            onClick={() => {
              setShowDatePicker(false);
            }}
          >
            Close 
          </button>
        </div>
      </div>
      {/* <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
        rangeColors={["#FD5861"]}
        dateDisplayFormat={"dd/MM/yyyy"}
      /> */}
    </div>
  );
}
