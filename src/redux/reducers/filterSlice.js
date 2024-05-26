import { createSlice } from "@reduxjs/toolkit";
import { dataService } from "../../services/LocalService";

const initialState = {
  status: "top-[-100px]",
  cityID: "",
  cityName: dataService.get(),
  startDate: "",
  endDate: "",
  quantity: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    showFilter: (state) => {
      if (state.status === "top-[-100px]") {
        state.status = "top-[70px]";
      } else {
        state.status = "top-[-100px]";
      }
    },
    hiddenFilter: (state) => {
      state.status = "top-[-100px]";
    },
    sendCityID: (state, action) => {
      state.cityID = action.payload;
    },
    sendCityName: (state, action) => {
      state.cityName = action.payload;
    },
    sendStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    sendEndDate: (state, action) => {
      state.endDate = action.payload;
    },
    sendQuantity: (state, action) => {
      state.quantity = action.payload;
    },
  },
});

export const {
  showFilter,
  hiddenFilter,
  sendCityID,
  sendCityName,
  sendStartDate,
  sendEndDate,
  sendQuantity,
} = filterSlice.actions;

export default filterSlice.reducer;
