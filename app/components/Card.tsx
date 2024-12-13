import React from "react";

const Card = ({ children, className, ...props }: any) => {
  return (
    <div
      className={`
        px-6 py-4 m-4 rounded-lg shadow-2xl border-2 border-slate-800 bg-slate-700 bg-opacity-80 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
