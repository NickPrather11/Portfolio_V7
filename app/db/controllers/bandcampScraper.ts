import * as cheerio from "cheerio";
import moment from "moment";

export interface IAlbumObject {
  bandcampURL: string;
  albumName: string;
  albumImg: string;
  artistName: string;
  releaseDate: string;
}

const scrapeAlbums = async (targetBaseURL: string): Promise<IAlbumObject[]> => {
  let modifiedURL = targetBaseURL;
  let page: string = "";
  if (targetBaseURL.includes("hellohugo")) {
    page = "hellohugo";
    modifiedURL += "/music";
  } else if (targetBaseURL.includes("nickprather")) {
    page = "nickprather";
  }

  const response = await fetch(modifiedURL);
  const html = await response.text();
  const $ = cheerio.load(html);
  let albums: IAlbumObject[] = [];

  $(".music-grid-item").each((index, element) => {
    let album: IAlbumObject = {
      bandcampURL: "",
      albumName: "",
      albumImg: "",
      artistName: "",
      releaseDate: "",
    };

    let url = targetBaseURL + ($(element).children("a").attr("href") ?? "");
    album.bandcampURL = url;

    let albumTitle = $(element).children("a").children("p").text().trim();
    if (albumTitle.includes("\n")) {
      albumTitle = albumTitle.slice(0, albumTitle.indexOf("\n"));
    }
    album.albumName = albumTitle;

    let albumCover =
      $(element).children("a").children("div").children("img").attr("src") ===
      "/img/0.gif"
        ? $(element)
            .children("a")
            .children("div")
            .children("img")
            .attr("data-original") ?? ""
        : $(element)
            .children("a")
            .children("div")
            .children("img")
            .attr("src") ?? "";
    album.albumImg = albumCover;

    let name: string = "";
    if (page === "hellohugo") {
      name = "Hello Hugo";
    } else if (page === "nickprather") {
      name =
        $(element).children("a").children("p").children("span").text().trim() ||
        "Liminal Deities";
      if (name.includes("\n")) {
        name = name.slice(0, name.indexOf("\n"));
      }
    }
    album.artistName = name;

    albums.push(album);
  });

  albums = await scrapeReleaseDates(albums);

  return albums;
};

const scrapeReleaseDates = async (albums: IAlbumObject[]) => {
  albums = await Promise.all(
    albums.map(async (album) => {
      const response = await fetch(album.bandcampURL);
      const html = await response.text();
      const $ = cheerio.load(html);
      const credits = $(".tralbum-credits").text().trim();
      let dateScrape = "";

      if (credits.includes("\n")) {
        dateScrape = credits.slice(0, credits.indexOf("\n"));
      } else {
        dateScrape = credits;
      }

      dateScrape = dateScrape.slice(9);
      let formattedDate = new Date(dateScrape);
      album.releaseDate = moment(formattedDate).format("YYYY/MM/DD");

      return album;
    })
  );
  return albums;
};

const getAllAlbums = async () => {
  let bandcampPages = [
    "https://nickprather.bandcamp.com",
    "https://hellohugo.bandcamp.com",
  ];

  let allAlbums: IAlbumObject[] = [];
  await Promise.all(
    bandcampPages.map(async (URL: string, index: number) => {
      const pageAlbums = await scrapeAlbums(URL);
      allAlbums.push(...pageAlbums);
    })
  );
  console.log("Albums scraped: " + allAlbums.length);
  allAlbums.sort((a, b) =>
    b.releaseDate > a.releaseDate ? 1 : a.releaseDate > b.releaseDate ? -1 : 0
  );
  return allAlbums;
};

const scrapedAlbumData = async () => {
  return await getAllAlbums();
};

export default scrapedAlbumData;
