// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { logOutAction } from '../../redux/userReducer/userSlice';

// const Signin = () => {
//   const dispatch = useDispatch();
//   const { infoUser } = useSelector((state) => state.userReducer);
//   return (
//     <div className="space-x-3">
//       <span className="text-white text-xl">{infoUser.name}</span>
//       <button
//         onClick={() => {
//           dispatch(logOutAction());
//         }}
//         className="bg-red-400 text-white p-2 rounded"
//       >
//         Sign Out 
//       </button>
//     </div>
//   );
// };

// export default Signin;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOutAction } from '../redux/userReducer/userSlice';

const Signin = () => {
  const dispatch = useDispatch();
  const { infoUser, isLoggedIn } = useSelector((state) => state.userReducer);

  return (
    <div className="space-x-3">
      {isLoggedIn ? (
        <>
          <span className="text-white text-xl">{infoUser.name}</span>
          <button
            onClick={() => {
              dispatch(logOutAction());
            }}
            className="bg-red-400 text-white p-2 rounded"
          >
            Sign Out
          </button>
        </>
      ) : (
        <span className="text-white text-xl">Please sign in</span>
      )}
    </div>
  );
};

export default Signin;
