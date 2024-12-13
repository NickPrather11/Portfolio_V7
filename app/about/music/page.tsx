import React from "react";
import AlbumCard from "@/app/about/music/components/AlbumCard";
import Card from "@/app/components/Card";
import { IAlbumObject } from "@/app/db/controllers/bandcampScraper";

interface AlbumArray {
  albums: IAlbumObject[];
}

const getAlbums = async (): Promise<AlbumArray> => {
  const res = await fetch(process.env.PATH_URI + "/api/albums", {
    cache: "no-store",
  });

  if (!res.ok) {
    console.log("Failed to fetch albums");
  }

  return res.json();
};

const MusicPage = async () => {
  const { albums } = await getAlbums();
  albums.sort((a, b) =>
    b.releaseDate > a.releaseDate ? 1 : a.releaseDate > b.releaseDate ? -1 : 0
  );
  return (
    <Card>
      <div className="flex flex-col items-center gap-4">
        <h2>Music</h2>
        <p className="italic text-sm">
          I have recorded a lot of music in my life. Here is what is currently
          available.
        </p>
      </div>

      <ul className="flex flex-wrap justify-center mt-10">
        {albums.map((album: IAlbumObject) => (
          <li key={album.albumName}>
            <AlbumCard
              albumImg={album.albumImg}
              bandcampURL={album.bandcampURL}
              albumName={album.albumName}
              artistName={album.artistName}
              releaseDate={album.releaseDate}
            />
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default MusicPage;
