import React from 'react'

const EmptyCard = ({ imgSrc, message,img2 }) => {
    return (
      <div className="flex flex-col items-center justify-center mt-20">
          <img src={imgSrc} alt="No notes" className="w-40" />
          <p className="w-1/2 text-sm font-medium text-slate-700 text-center leading-7 mt-5">
              {message}
          </p>
          <img src={img2} alt="" className="w-40 animate-wiggle mt-28" />
      </div>
    );
  };
  
export default EmptyCard