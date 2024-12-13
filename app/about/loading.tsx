import React from "react";
import LoadingComponent from "../components/LoadingComponent";
import Center from "../components/Center";

const Loading = () => {
  return (
    <Center className="flex-col gap-12 m-8">
      <p>Loading...</p>
      <LoadingComponent />
    </Center>
  );
};

export default Loading;
