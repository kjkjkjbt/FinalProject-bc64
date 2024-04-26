import React from 'react';
import { useSelector } from 'react-redux';
import Lottie from 'lottie-react';
import loading from '../../assets/loading.json';


const Loading = () => {
  const { isLoading } = useSelector((state) => state.loadingReducer);
  return (
    <div
      className={`w-screen h-screen fixed text-white bg-blue-250 ${
        isLoading ? '' : 'hidden'
      } top-0 left-0 z-50`}
    >
      <div className="w-full h-full flex justify-center items-center ">
        <span>
        <Lottie animationData={loading} />
        
        </span>
        
      </div>
    </div>
  );
};

export default Loading;
