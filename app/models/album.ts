import mongoose, { Schema } from "mongoose";

const albumSchema = new Schema(
  {
    albumName: String,
    albumImg: String,
    artistName: String,
    bandcampURL: String,
    releaseDate: String,
  },
  {
    collection: "albums",
  }
);

const Album = mongoose.models.Album || mongoose.model("Album", albumSchema);

export default Album;
