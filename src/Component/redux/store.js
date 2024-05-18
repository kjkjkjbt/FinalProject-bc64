// import { configureStore } from '@reduxjs/toolkit';
// import userSlice from './userReducer/userSlice';
// import loadingSlice from './loadingReducer/loadingSlice';

// export const store = configureStore({
//   reducer: {
//     userReducer: userSlice,
//     loadingReducer: loadingSlice,
//   },
// });


// store.js
import { configureStore} from '@reduxjs/toolkit';
import loadingReducer from './loadingReducer/loadingSlice'; 
import userReducer from './userReducer/userSlice'; 
import userSlice from './userReducer/userSlice';

export const store = configureStore({
  reducer: {
    loading: loadingReducer,
    user: userReducer,
    userReducer : userSlice,

    // other reducers
  },
});

