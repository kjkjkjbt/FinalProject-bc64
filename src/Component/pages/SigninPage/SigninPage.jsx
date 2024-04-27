// import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';
// import { userSer } from '../../../service/userSer';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/userReducer/userThunk';
import { useNavigate } from 'react-router-dom';
// import { message } from 'antd';

const SigninPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formLogin = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    onSubmit: (value) => {
      const navigateCus = () => {
        navigate('/');
      };
      dispatch(loginThunk({ value, navigateCus }));
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .required('cannot be blank')
        .min(4, '@gmail.com/@yahoo.com'),
      password: yup
        .string()
        .required('cannot be blanked')
        .min(3, 'at least 3  characters'),
    }),
  });
  return (
    <div>
      <form
        onSubmit={formLogin.handleSubmit}
        action=""
        className="border p-3 rounded-md space-y-3"
      >
        <h3 className="text-2xl font-medium"> Sign In </h3>
        <div>
          <label className="text-sm font-medium" htmlFor="">
            Username 
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="border rounded p-2 w-full"
            onChange={formLogin.handleChange}
          />
          <p className="text-red-500 h-3">{formLogin.errors.email}</p>
        </div>
        <div>
          <label className="text-sm font-medium" htmlFor="">
            Password 
          </label>
          <input
            className="border rounded p-2 w-full"
            type="text"
            name="password"
            id="password"
            onChange={formLogin.handleChange}
          />
          <p className="text-red-200  h-3">{formLogin.errors.password}</p>
        </div>
        <button className="bg-blue-200 text-white rounded p-2 ">
          Sign In 
        </button>
      </form>
    </div>
  );
};

export default SigninPage;
