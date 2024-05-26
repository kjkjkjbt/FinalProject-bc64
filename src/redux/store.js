import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./reducers/filterSlice";
import spinnerSlice from "./reducers/spinnerSlice";
import userSlice from "./reducers/userSlice";

export const store = configureStore({
  reducer: {
    userSlice: userSlice,
    filter: filterSlice,
    spinnerSlice: spinnerSlice,
  },
});
