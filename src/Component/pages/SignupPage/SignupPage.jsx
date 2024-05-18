


// import axios from 'axios';
// import { useFormik } from 'formik';
// import React from 'react';
// import * as yup from 'yup';
// import { userSer } from '../../../service/userSer';
// import { useDispatch } from 'react-redux';
// import { signupThunk } from '../../redux/userReducer/userThunk';
// import { useNavigate } from 'react-router-dom';
// import { message } from 'antd';
// import { NavLink } from 'react-router-dom';
// const SignupPage = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const formSignup = useFormik({
//     initialValues: {
//       "id": '',
//       "name": '',
//       "email": '',
//       "password": '',
//       "phone": '',
//       "birthday": '',
//       "gender": '',
//       "role": ''
    
//     },

//     onSubmit: (value) => {
//       const navigateCus = () => {
//         navigate('/');
//       };
//       dispatch(signupThunk({ value, navigateCus }));
//     },
//     validationSchema: yup.object().shape({
//       id: yup
//         .string()
//         .required('cannot be blank')
//         .min(4, 'at least 4 characters'),
//       password: yup
//         .string()
//         .required('cannot be blank')
//         .min(3, 'at least 3 characters'),
//     }),
//   });
//   return (
//     <div>
//       <form
//         onSubmit={formSignup.handleSubmit}
//         action=""
//         className="border p-3 rounded-md space-y-3"
//       >
//         <h3 className="text-2xl font-medium"> Sign up  </h3>
//         {/* tên  */}
//         <div>
//           <label className="text-sm font-medium" htmlFor="">
//             Full Name :
//           </label>
//           <input
//             type="text"
//             name="name"
//             id="name"
//             className="border rounded p-2 w-full"
//             onChange={formSignup.handleChange}
//           />
//           <p className="text-red-500 h-3">{formSignup.errors.name}</p>
//         </div>
//         {/* mật khẩu  */}
//         <div>
//           <label className="text-sm font-medium" htmlFor="">
//             Password 
//           </label>
//           <input
//             className="border rounded p-2 w-full"
//             type="text"
//             name="password"
//             id="password"
//             onChange={formSignup.handleChange}
//           />
//           <p className="text-red-500  h-3">{formSignup.errors.password}</p>
//         </div>
//         {/* email  */}
//         <div>
//           <label className="text-sm font-medium" htmlFor="">
//             Email 
//           </label>
//           <input
//             className="border rounded p-2 w-full"
//             type="text"
//             name="email"
//             id="email"
//             onChange={formSignup.handleChange}
//           />
//           <p className="text-red-500  h-3">{formSignup.errors.email}</p>
//         </div>
//         {/* số điện thoại */}
//         <div>
//           <label className="text-sm font-medium" htmlFor="">
//             Tel.
//           </label>
//           <input
//             className="border rounded p-2 w-full"
//             type="number"
//             name="phone"
//             id="phone"
//             onChange={formSignup.handleChange}
//           />
//           <p className="text-red-500  h-3">{formSignup.errors.phone}</p>
//         </div>
//          {/* tên Đăng kí */}
//         <div>
//           <label className="text-sm font-medium" htmlFor="">
//             Username 
//           </label>
//           <input
//             className="border rounded p-2 w-full"
//             type="string"
//             name="id"
//             id="id"
//             onChange={formSignup.handleChange}
//           />
//           <p className="text-red-500  h-3">{formSignup.errors.id}</p>
//         </div>
//         {/* DOB */}
//         <div>
//           <label className="text-sm font-medium" htmlFor="">
//             DOB 
//           </label>
//           <input
//             className="border rounded p-2 w-full"
//             type="number"
//             name="birthday"
//             id="birthday"
//             onChange={formSignup.handleChange}
//           />
//           <p className="text-red-500  h-3">{formSignup.errors.birthday}</p>
//         </div>
//         {/* sex */}
//         <div>
//           <label className="text-sm font-medium" htmlFor="">
//             Sex 
//           </label>
//           <input
//             className="border rounded p-2 w-full"
//             type="option"
//             name="gender"
//             id="gender"
//             onChange={formSignup.handleChange}
//           />
//           <p className="text-red-500  h-3">{formSignup.errors.gender}</p>
//         </div>
//         {/* role */}
//         <div>
//           <label className="text-sm font-medium" htmlFor="">
//             Role 
//           </label>
//           <input
//             className="border rounded p-2 w-full"
//             type="optional"
//             name="role"
//             id="role"
//             onChange={formSignup.handleChange}
//           />
//           <p className="text-red-500  h-3">{formSignup.errors.role}</p>
//         </div>
//         {/* nút đăng ký */}
//         <button className="bg-blue-500 text-white rounded p-2 ">
//           Create Account 
//         </button>

//         {/* điều khoản  */}
//        <div className="text-center text-sm text-grey-dark mt-4">
//               By signing up, you agree to the 
//           <NavLink className="no-underline border-b border-grey-dark text-grey-dark" to ="#">
//             Terms of Service
//           </NavLink> and 
//           <NavLink NavLink className="no-underline border-b border-grey-dark text-grey-dark" to ="#">
//             Privacy Policy
//           </NavLink>
//       </div>

//       </form>
//     </div>
//   );
// };

// export default SignupPage;

import { useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { signupThunk } from '../../redux/userReducer/userThunk';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import  Signout from '../../Header/Signout';
const SignupPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formSignup = useFormik({
    initialValues: {
      id: '',
      name: '',
      email: '',
      password: '',
      phone: '',
      birthday: '',
      gender: '',
      role: ''
    },
    onSubmit: (value) => {
      const navigateCus = () => {
        navigate('/');
      };
      dispatch(signupThunk({ value, navigateCus }));
    },
    validationSchema: yup.object().shape({
      id: yup.string().required('Username cannot be blank').min(4, 'At least 4 characters'),
      name: yup.string().required('Full Name cannot be blank'),
      email: yup.string().required('Email cannot be blank').email('Invalid email address'),
      password: yup.string().required('Password cannot be blank').min(3, 'At least 3 characters'),
      phone: yup.string().required('Phone cannot be blank').matches(/^[0-9]+$/, 'Phone number is not valid'),
      birthday: yup.date().required('DOB cannot be blank'),
      gender: yup.string().required('Gender cannot be blank'),
      role: yup.string().required('Role cannot be blank')
    }),
  });

  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={formSignup.handleSubmit} className="border p-6 rounded-md space-y-4 shadow-md">
        <h3 className="text-2xl font-medium text-gray-800">Sign Up 
            <Signout />
        </h3>
        <div>
          <label className="text-sm font-medium text-gray-700" htmlFor="name">Full Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            className="border rounded p-2 w-full"
            onChange={formSignup.handleChange}
            onBlur={formSignup.handleBlur}
            value={formSignup.values.name}
          />
          {formSignup.touched.name && formSignup.errors.name ? (
            <p className="text-red-500 mt-1">{formSignup.errors.name}</p>
          ) : null}
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700" htmlFor="password">Password:</label>
          <input
            className="border rounded p-2 w-full"
            type="password"
            name="password"
            id="password"
            onChange={formSignup.handleChange}
            onBlur={formSignup.handleBlur}
            value={formSignup.values.password}
          />
          {formSignup.touched.password && formSignup.errors.password ? (
            <p className="text-red-500 mt-1">{formSignup.errors.password}</p>
          ) : null}
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700" htmlFor="email">Email:</label>
          <input
            className="border rounded p-2 w-full"
            type="email"
            name="email"
            id="email"
            onChange={formSignup.handleChange}
            onBlur={formSignup.handleBlur}
            value={formSignup.values.email}
          />
          {formSignup.touched.email && formSignup.errors.email ? (
            <p className="text-red-500 mt-1">{formSignup.errors.email}</p>
          ) : null}
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700" htmlFor="phone">Tel:</label>
          <input
            className="border rounded p-2 w-full"
            type="text"
            name="phone"
            id="phone"
            onChange={formSignup.handleChange}
            onBlur={formSignup.handleBlur}
            value={formSignup.values.phone}
          />
          {formSignup.touched.phone && formSignup.errors.phone ? (
            <p className="text-red-500 mt-1">{formSignup.errors.phone}</p>
          ) : null}
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700" htmlFor="id">Username:</label>
          <input
            className="border rounded p-2 w-full"
            type="text"
            name="id"
            id="id"
            onChange={formSignup.handleChange}
            onBlur={formSignup.handleBlur}
            value={formSignup.values.id}
          />
          {formSignup.touched.id && formSignup.errors.id ? (
            <p className="text-red-500 mt-1">{formSignup.errors.id}</p>
          ) : null}
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700" htmlFor="birthday">DOB:</label>
          <input
            className="border rounded p-2 w-full"
            type="date"
            name="birthday"
            id="birthday"
            onChange={formSignup.handleChange}
            onBlur={formSignup.handleBlur}
            value={formSignup.values.birthday}
          />
          {formSignup.touched.birthday && formSignup.errors.birthday ? (
            <p className="text-red-500 mt-1">{formSignup.errors.birthday}</p>
          ) : null}
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Gender:</label>
          <div className="flex items-center mt-2">
            <label className="mr-4">
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={formSignup.handleChange}
                onBlur={formSignup.handleBlur}
                checked={formSignup.values.gender === 'Male'}
              />
              <span className="ml-2">Male</span>
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={formSignup.handleChange}
                onBlur={formSignup.handleBlur}
                checked={formSignup.values.gender === 'Female'}
              />
              <span className="ml-2">Female</span>
            </label>
          </div>
          {formSignup.touched.gender && formSignup.errors.gender ? (
            <p className="text-red-500 mt-1">{formSignup.errors.gender}</p>
          ) : null}
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700" htmlFor="role">Role:</label>
          <input
            className="border rounded p-2 w-full"
            type="text"
            name="role"
            id="role"
            onChange={formSignup.handleChange}
            onBlur={formSignup.handleBlur}
            value={formSignup.values.role}
          />
          {formSignup.touched.role && formSignup.errors.role ? (
            <p className="text-red-500 mt-1">{formSignup.errors.role}</p>
          ) : null}
        </div>

        <button className="bg-blue-500 text-white rounded p-2 w-full hover:bg-blue-600">
          Create Account
        </button>

        <div className="text-center text-sm text-grey-dark mt-4">
          By signing up, you agree to the{' '}
          <NavLink className="no-underline border-b border-grey-dark text-grey-dark" to="#">
            Terms of Service
          </NavLink>{' '}
          and{' '}
          <NavLink className="no-underline border-b border-grey-dark text-grey-dark" to="#">
            Privacy Policy
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
