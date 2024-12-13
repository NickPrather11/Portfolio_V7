import mongoose, { Connection } from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

let client: Connection | null = null;

const MONGODB_URI = process.env.DB_URI as string;

interface DbConnection {
  client: Connection;
}

async function dbConnect(): Promise<DbConnection> {
  if (client) {
    console.log("Returning existing db client");
    return { client };
  }

  await mongoose.connect(MONGODB_URI, {
    dbName: "portfolio_data",
  });

  client = mongoose.connection;

  console.log("Connected to the Database");
  return { client };
}

export default dbConnect;
