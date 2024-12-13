import React from "react";

const Card = ({ children, className, ...props }: any) => {
  return (
    <div
      className={`
        px-6 py-4 m-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
