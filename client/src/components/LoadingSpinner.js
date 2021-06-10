import React from "react";
import './LoadingSpinner.css'

const LoadingSpinner = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
};

export default LoadingSpinner;
