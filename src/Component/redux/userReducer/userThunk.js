import { createAsyncThunk } from '@reduxjs/toolkit';
import { userSer } from '../../service/userSer';
import { message } from 'antd';

export const loginThunk= createAsyncThunk(
  'userReducer/loginThunk',
  async (payload, { rejectWithValue }) => {
    try {
      const data = await userSer.postLogin(payload.value);
      let infoUser = data.data.content;
      payload.navigateCus();
      message.success('Sign in Successfully');
      return infoUser;
    } catch (error) {
      message.error('fail');
      return rejectWithValue(error);
    }
  },
);

export const signupThunk = createAsyncThunk(
  'userReducer/signupThunk',
  async (payload, { rejectWithValue }) => {
    try {
      const data = await userSer.postSignup(payload.value);
      let infoUser = data.data.content;
      payload.navigateCus();
      message.success('Sign Up Successfully');
      return infoUser;
    } catch (error) {
      message.error('fail');
      return rejectWithValue(error);
    }
  },
);