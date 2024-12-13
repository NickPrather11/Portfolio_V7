import React from "react";
import moment from "moment";
import Link from "next/link";
import Center from "../../../components/Center";
import { IAlbumObject } from "@/app/db/controllers/bandcampScraper";

const AlbumCard = ({
  albumName,
  bandcampURL,
  albumImg,
  artistName,
  releaseDate,
}: IAlbumObject) => {
  const releaseDateString = moment(releaseDate, "YYYY/MM/DD").format("l");
  return (
    <Link
      key={albumName}
      href={bandcampURL}
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-center h-[19rem] w-64 pt-4 my-4 rounded-xl transition-all duration-300 hover:scale-125 hover:bg-gray-900 hover:bg-opacity-35"
    >
      <Center className="absolute flex-col w-36 ">
        <img className="rounded-lg" src={albumImg} alt="" />
        <Center className="flex-col">
          <div className="pt-3 text-center text-sm text-wrap">{albumName}</div>
          <div className="pt-1 text-center text-sm text-gray-400 text-wrap">
            by {artistName}
          </div>
          <div className="pt-1 text-center text-xs text-gray-400 text-wrap">
            (released {releaseDateString})
          </div>
        </Center>
      </Center>
    </Link>
  );
};

export default AlbumCard;
