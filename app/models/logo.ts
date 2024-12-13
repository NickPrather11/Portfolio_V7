// THIS FILE WILL REPLACE ./techLogos.ts ONCE THE IMAGES ARE LOADED IN THE DB

import mongoose, { Schema } from "mongoose";

const logo = new Schema(
  {
    name: String,
    url: String,
    imgFile: Image,
  },
  {
    collection: "logos",
  }
);

const Logo = mongoose.models.Logo || mongoose.model("Logo", logo);

export default Logo;
