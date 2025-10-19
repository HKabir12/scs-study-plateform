import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";

export async function GET() {
  const usersCollection = await dbConnect("users");
  const users = await usersCollection.find({}).toArray();
  return NextResponse.json(users);
}

export async function POST(req: Request) {
  const usersCollection = await dbConnect("users");
  const data = await req.json();
  const result = await usersCollection.insertOne(data);
  return NextResponse.json(result, { status: 201 });
}
