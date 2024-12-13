import React from "react";

const Page = ({ children, className }: any) => {
  return (
    <div
      className={`flex flex-col justify-content-start items-center ${className}`}
    >
      {children}
    </div>
  );
};

export default Page;
