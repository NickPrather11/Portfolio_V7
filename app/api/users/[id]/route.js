import dbConnect from '../../../db/dbConnect'
import User from '../../../models/users'
import { NextRequest, NextResponse } from 'next/server'

/* Might switch this file back to Typescript

interface IUser {
  userName: string
  userPassword: string
}
*/


// ********* Does the User Object ever need to be updated? *********

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await dbConnect();
  await User.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await dbConnect();
  const topic = await User.findOne({ _id: id });
  return NextResponse.json({ topic }, { status: 200 });
}