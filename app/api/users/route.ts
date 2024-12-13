import dbConnect from '../../db/dbConnect'
import User from '../../models/users'
import { NextRequest, NextResponse } from 'next/server'

interface IUser {
    userName: string
    userPassword: string
}

export async function GET() {
    try {
        await dbConnect();
        const users = await User.find();
        return NextResponse.json({ users });
    } catch (err) {
        console.log("GET error: " + err)
    }
}

export async function POST(request: NextRequest) {
    try {
        const newUser: IUser = await request.json();
        await dbConnect();
        await User.create(newUser);
        return NextResponse.json({ message: "User Created" }, { status: 201 });

    } catch (err) {
        console.log("POST error: " + err)
    }
}
  
export async function DELETE(request: NextRequest) {
    try {
        const id = request.nextUrl.searchParams.get("id");
        await dbConnect();
        await User.findByIdAndDelete(id);
        return NextResponse.json({ message: "User deleted" }, { status: 200 });
    } catch (err) {
        console.log("DELETE error: " + err)
    }  
}


  
