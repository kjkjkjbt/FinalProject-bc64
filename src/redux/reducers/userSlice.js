import { createSlice } from "@reduxjs/toolkit";
import { localService } from "../../services/LocalService";

const initialState = {
  account: localService.get(),
};
const userSlice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {
    getUserLogin: (state = initialState, { payload }) => {
      state.account = payload;
    },
  },
});

export const { getUserLogin } = userSlice.actions;

export default userSlice.reducer;
