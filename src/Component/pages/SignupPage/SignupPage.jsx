


import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import { userSer } from '../../../service/userSer';
import { useDispatch } from 'react-redux';
import { signupThunk } from '../../redux/userReducer/userThunk';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { NavLink } from 'react-router-dom';
const SignupPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formSignup = useFormik({
    initialValues: {
      "id": '',
      "name": '',
      "email": '',
      "password": '',
      "phone": '',
      "birthday": '',
      "gender": '',
      "role": ''
    
    },

    onSubmit: (value) => {
      const navigateCus = () => {
        navigate('/');
      };
      dispatch(signupThunk({ value, navigateCus }));
    },
    validationSchema: yup.object().shape({
      id: yup
        .string()
        .required('cannot be blank')
        .min(4, 'at least 4 characters'),
      password: yup
        .string()
        .required('cannot be blank')
        .min(3, 'at least 3 characters'),
    }),
  });
  return (
    <div>
      <form
        onSubmit={formSignup.handleSubmit}
        action=""
        className="border p-3 rounded-md space-y-3"
      >
        <h3 className="text-2xl font-medium"> Sign up  </h3>
        {/* tên  */}
        <div>
          <label className="text-sm font-medium" htmlFor="">
            Full Name :
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="border rounded p-2 w-full"
            onChange={formSignup.handleChange}
          />
          <p className="text-red-500 h-3">{formSignup.errors.name}</p>
        </div>
        {/* mật khẩu  */}
        <div>
          <label className="text-sm font-medium" htmlFor="">
            Password 
          </label>
          <input
            className="border rounded p-2 w-full"
            type="text"
            name="password"
            id="password"
            onChange={formSignup.handleChange}
          />
          <p className="text-red-500  h-3">{formSignup.errors.password}</p>
        </div>
        {/* email  */}
        <div>
          <label className="text-sm font-medium" htmlFor="">
            Email 
          </label>
          <input
            className="border rounded p-2 w-full"
            type="text"
            name="email"
            id="email"
            onChange={formSignup.handleChange}
          />
          <p className="text-red-500  h-3">{formSignup.errors.email}</p>
        </div>
        {/* số điện thoại */}
        <div>
          <label className="text-sm font-medium" htmlFor="">
            Tel.
          </label>
          <input
            className="border rounded p-2 w-full"
            type="number"
            name="phone"
            id="phone"
            onChange={formSignup.handleChange}
          />
          <p className="text-red-500  h-3">{formSignup.errors.phone}</p>
        </div>
         {/* tên Đăng kí */}
        <div>
          <label className="text-sm font-medium" htmlFor="">
            Username 
          </label>
          <input
            className="border rounded p-2 w-full"
            type="string"
            name="id"
            id="id"
            onChange={formSignup.handleChange}
          />
          <p className="text-red-500  h-3">{formSignup.errors.id}</p>
        </div>
        {/* DOB */}
        <div>
          <label className="text-sm font-medium" htmlFor="">
            DOB 
          </label>
          <input
            className="border rounded p-2 w-full"
            type="number"
            name="birthday"
            id="birthday"
            onChange={formSignup.handleChange}
          />
          <p className="text-red-500  h-3">{formSignup.errors.birthday}</p>
        </div>
        {/* sex */}
        <div>
          <label className="text-sm font-medium" htmlFor="">
            Sex 
          </label>
          <input
            className="border rounded p-2 w-full"
            type="option"
            name="gender"
            id="gender"
            onChange={formSignup.handleChange}
          />
          <p className="text-red-500  h-3">{formSignup.errors.gender}</p>
        </div>
        {/* role */}
        <div>
          <label className="text-sm font-medium" htmlFor="">
            Role 
          </label>
          <input
            className="border rounded p-2 w-full"
            type="optional"
            name="role"
            id="role"
            onChange={formSignup.handleChange}
          />
          <p className="text-red-500  h-3">{formSignup.errors.role}</p>
        </div>
        {/* nút đăng ký */}
        <button className="bg-blue-500 text-white rounded p-2 ">
          Create Account 
        </button>

        {/* điều khoản  */}
       <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the 
          <NavLink className="no-underline border-b border-grey-dark text-grey-dark" to ="#">
            Terms of Service
          </NavLink> and 
          <NavLink NavLink className="no-underline border-b border-grey-dark text-grey-dark" to ="#">
            Privacy Policy
          </NavLink>
      </div>

      </form>
    </div>
  );
};

export default SignupPage;

