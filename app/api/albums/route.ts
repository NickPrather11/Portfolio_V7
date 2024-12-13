import dbConnect from "../../db/dbConnect";
import Album from "../../models/album";
import { NextRequest, NextResponse } from "next/server";

interface IAlbum {
  albumName: string;
  artistName: string;
  albumImg: string;
  bandcampURL: string;
  releaseDate: Date;
}

export async function GET() {
  try {
    await dbConnect();
    const albums = await Album.find();
    console.log("Albums retrieved from API: " + albums.length);
    return NextResponse.json({ albums });
  } catch (err) {
    console.log("GET error: " + err);
  }
}

export async function POST(request: NextRequest) {
  try {
    const newAlbumData: IAlbum = await request.json();
    await dbConnect();
    await Album.create(newAlbumData);
    return NextResponse.json({ message: "Album Created" }, { status: 201 });
  } catch (err) {
    console.log("POST error: " + err);
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    await dbConnect();
    await Album.findByIdAndDelete(id);
    return NextResponse.json({ message: "Album deleted" }, { status: 200 });
  } catch (err) {
    console.log("DELETE error: " + err);
  }
}
