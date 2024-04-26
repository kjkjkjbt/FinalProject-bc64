import React from 'react';
import { useNavigate } from 'react-router-dom';

const Signout = () => {
  const navigate = useNavigate();
  return (
    <div className="space-x-3">
      <button
        onClick={() => {
          navigate('/auth/signin');
        }}
        className="bg-blue-200 text-white p-2 rounded"
      >
        Sign In 
      </button>
      <button onClick={()=>{
        navigate ('/auth/signup')
      }} 
      className="bg-green-200 text-white p-2 rounded"> Sign Up </button>
    </div>
  );
};

export default Signout;
