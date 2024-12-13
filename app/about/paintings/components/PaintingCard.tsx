import React from "react";
import Center from "../../../components/Center";

export interface IPainting {
  fileName: string;
}

const PaintingCard = ({ fileName }: IPainting) => {
  const title: string = fileName
    .substring(fileName.indexOf("_") + 1, fileName.length)
    .replace(/\.[^/.]+$/, "")
    .replaceAll("_", " ");
  const dimensions: string = fileName.slice(0, fileName.indexOf("_"));
  const path: string = "/paintings/" + fileName;
  return (
    <Center
      key={fileName}
      className="flex flex-col justify-between m-4 w-11/12 md:w-36"
    >
      <img src={path} alt="" />
      <div className="flex flex-col self-start pl-2">
        <div className="pt-2 text-sm text-wrap">{dimensions}</div>
        <div className="pt-1 text-sm italic text-gray-300 text-wrap">
          {title}
        </div>
      </div>
    </Center>
  );
};

export default PaintingCard;
