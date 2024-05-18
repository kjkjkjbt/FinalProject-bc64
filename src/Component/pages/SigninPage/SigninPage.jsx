// // import axios from 'axios';
// import { useFormik } from 'formik';
// import React from 'react';
// import * as yup from 'yup';
// // import { userSer } from '../../../service/userSer';
// import { useDispatch } from 'react-redux';
// import { loginThunk } from '../../redux/userReducer/userThunk';
// import { useNavigate } from 'react-router-dom';
// // import { message } from 'antd';

// const SigninPage = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const formLogin = useFormik({
//     initialValues: {
//       email: '',
//       password: '',
//     },

//     onSubmit: (value) => {
//       const navigateCus = () => {
//         navigate('/');
//       };
//       dispatch(loginThunk({ value, navigateCus }));
//     },
//     validationSchema: yup.object().shape({
//       email: yup
//         .string()
//         .required('cannot be blank')
//         .min(4, '@gmail.com/@yahoo.com'),
//       password: yup
//         .string()
//         .required('cannot be blanked')
//         .min(3, 'at least 3  characters'),
//     }),
//   });
//   return (
//     <div>
//       <form
//         onSubmit={formLogin.handleSubmit}
//         action=""
//         className="border p-3 rounded-md space-y-3"
//       >
//         <h3 className="text-2xl font-medium"> Sign In </h3>
//         <div>
//           <label className="text-sm font-medium" htmlFor="">
//             Username 
//           </label>
//           <input
//             type="email"
//             name="email"
//             id="email"
//             className="border rounded p-2 w-full"
//             onChange={formLogin.handleChange}
//           />
//           <p className="text-red-500 h-3">{formLogin.errors.email}</p>
//         </div>
//         <div>
//           <label className="text-sm font-medium" htmlFor="">
//             Password 
//           </label>
//           <input
//             className="border rounded p-2 w-full"
//             type="text"
//             name="password"
//             id="password"
//             onChange={formLogin.handleChange}
//           />
//           <p className="text-red-200  h-3">{formLogin.errors.password}</p>
//         </div>
//         <button className="bg-blue-200 text-white rounded p-2 ">
//           Sign In 
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SigninPage;

import { useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/userReducer/userThunk';
import { useNavigate } from 'react-router-dom';
import Signin from '../../Header/Signin';

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
        .required('Cannot be blank')
        .email('Invalid email address'),
      password: yup
        .string()
        .required('Cannot be blank')
        .min(3, 'At least 3 characters'),
    }),
  });

  return (
    <div className="max-w-md mx-auto mt-10">
      <form
        onSubmit={formLogin.handleSubmit}
        className="border p-6 rounded-md space-y-4 shadow-md"
      >
        <h3 className="text-2xl font-medium text-gray-800">Sign In 
              <Signin />
        </h3>
        <div>
          <label className="text-sm font-medium text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="border rounded p-2 w-full"
            onChange={formLogin.handleChange}
            onBlur={formLogin.handleBlur}
            value={formLogin.values.email}
          />
          {formLogin.touched.email && formLogin.errors.email ? (
            <p className="text-red-500 mt-1">{formLogin.errors.email}</p>
          ) : null}
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700" htmlFor="password">
            Password
          </label>
          <input
            className="border rounded p-2 w-full"
            type="password"
            name="password"
            id="password"
            onChange={formLogin.handleChange}
            onBlur={formLogin.handleBlur}
            value={formLogin.values.password}
          />
          {formLogin.touched.password && formLogin.errors.password ? (
            <p className="text-red-500 mt-1">{formLogin.errors.password}</p>
          ) : null}
        </div>
        <button className="bg-blue-500 text-white rounded p-2 w-full hover:bg-blue-600">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SigninPage;
