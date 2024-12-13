import Album from "../../models/album";
import scrapedAlbumData, { IAlbumObject } from "./bandcampScraper";

const addScrapedAlbumToDB = (bandcampAlbum: IAlbumObject) => {
  Album.create(bandcampAlbum)
    .then((newDbAlbum) => {
      console.log("New album added: ", newDbAlbum);
    })
    .catch((err) => {
      console.log("Error creating album: ", err.message);
    });
};

const compareAndUpdateAlbums = async () => {
  const bandcampAlbums = await scrapedAlbumData();
  let albumsAddedCount = 0;

  Album.find({}).then(async (dbAlbums) => {
    if (dbAlbums.length == 0) {
      /* 
      No albums found in DB, adding all scraped albums
      */
      console.log("No albums in DB. Adding scraped albums...");

      for await (const bandcampAlbum of bandcampAlbums) {
        addScrapedAlbumToDB(bandcampAlbum);
        albumsAddedCount++;
      }

      console.log("Albums added to DB: ", albumsAddedCount);
    } else {
      /* 
      Albums found in DB; proceed with comparisons
      */
      console.log("Existing albums found in DB");
      for await (const bandcampAlbum of bandcampAlbums) {
        let matchFound = false;

        // Loop albums in DB for comparison
        for await (const dbAlbum of dbAlbums) {
          if (matchFound) {
            break;
          }

          if (bandcampAlbum.albumName === dbAlbum.albumName) {
            matchFound = true;
            const id = dbAlbum._id;
            // compare album data and update if different
            if (bandcampAlbum.artistName !== dbAlbum.artistName) {
              console.log(
                "Updating artist name for ",
                dbAlbum.albumName,
                "..."
              );
              Album.updateOne(
                { _id: id },
                { artistName: bandcampAlbum.artistName },
                { new: true }
              ).catch((err) =>
                console.log(
                  "Error updating artist name for album ",
                  dbAlbum.albumName,
                  ": ",
                  err.message
                )
              );
            }
            if (bandcampAlbum.albumImg !== dbAlbum.albumImg) {
              console.log("Updating image URL for ", dbAlbum.albumName, "...");
              Album.updateOne(
                { _id: id },
                { albumImg: bandcampAlbum.albumImg },
                { new: true }
              ).catch((err) =>
                console.log(
                  "Error updating album image URL for album ",
                  dbAlbum.albumName,
                  ": ",
                  err.message
                )
              );
            }
            if (bandcampAlbum.bandcampURL !== dbAlbum.bandcampURL) {
              console.log("Updating album URL for ", dbAlbum.albumName, "...");
              Album.updateOne(
                { _id: id },
                { bandcampURL: bandcampAlbum.bandcampURL },
                { new: true }
              ).catch((err) =>
                console.log(
                  "Error updating album URL for album ",
                  dbAlbum.albumName,
                  ": ",
                  err.message
                )
              );
            }
            if (bandcampAlbum.releaseDate !== dbAlbum.releaseDate) {
              console.log(
                "Updating release date for ",
                dbAlbum.albumName,
                "..."
              );
              Album.updateOne(
                { _id: id },
                { releaseDate: bandcampAlbum.releaseDate },
                { new: true }
              ).catch((err) =>
                console.log(
                  "Error updating release date for album ",
                  dbAlbum.albumName,
                  ": ",
                  err.message
                )
              );
            }
          }
        }

        if (!matchFound) {
          // No match found in DB, add scraped album to DB
          console.log(
            "No match found for ",
            bandcampAlbum,
            ": Adding album to DB..."
          );
          addScrapedAlbumToDB(bandcampAlbum);
          albumsAddedCount++;
        }
      }

      console.log("Albums added to DB: ", albumsAddedCount);
    }
  });
};

export default compareAndUpdateAlbums;
