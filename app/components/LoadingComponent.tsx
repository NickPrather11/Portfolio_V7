import React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

const LoadingComponent = () => {
  return (
    <div className="place-self-center">
      <ScaleLoader color="white" loading={true} />
    </div>
  );
};

export default LoadingComponent;
