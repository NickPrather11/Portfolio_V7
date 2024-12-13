import { ILogo } from "@/app/db/seeds/dbLogoSeed";
import React from "react";

const TechCard = ({ name, url, imgFile }: ILogo) => {
  return (
    <li className="flex m-2 rounded-lg bg-slate-200">
      <img className="p-2 w-24 md:w-32 " src={imgFile} alt={url} />
    </li>
  );
};

export default TechCard;
