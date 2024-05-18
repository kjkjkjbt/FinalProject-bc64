// import { createSlice } from '@reduxjs/toolkit';
// import { loginThunk } from '../userReducer/userThunk';
// import { userLocal  } from '../../../service/userLocal';

// // import { message } from 'antd';

// const initialState = {
//   infoUser: userLocal.get(),
// };

// const userSlice = createSlice({
//   name: 'userSlice',
//   initialState,
//   reducers: {
//     logOutAction: (state, action) => {
//       // xoá redux
//       state.infoUser = null;
//       // xoá localstorage
//       userLocal.delete();
//     },
//   },
//   //   Xử lý action bất đồng bộ
//   extraReducers: (builder) => {
//     // fulfilled : Thành công , pending : chờ , rejected : thất bại
//     builder
//       .addCase(loginThunk.fulfilled, (state, action) => {
//         if (action.payload) {
//           state.infoUser = action.payload;
//           //Lưu info user xuống localstorage
//           userLocal.set(action.payload);
//         }
//       })
//       .addCase(loginThunk.pending, (state, action) => {})
//       .addCase(loginThunk.rejected, (state, action) => {
//         console.log('thất bại');
//       });
//   },

  
// });

// export const { logOutAction } = userSlice.actions;

// export default userSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  infoUser: {
    name: '',
    email: '',
  },
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logInAction: (state, action) => {
      state.infoUser = action.payload;
      state.isLoggedIn = true;
    },
    logOutAction: (state) => {
      state.infoUser = { name: '', email: '' };
      state.isLoggedIn = false;
    },
  },
});

export const { logInAction, logOutAction } = userSlice.actions;
export default userSlice.reducer;
