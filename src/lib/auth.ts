"use server";

import { cookies } from "next/headers";
import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

const uri = process.env.NEXT_PUBLIC_MONGODB_URI!;
const dbName = process.env.DB_NAME!;

export interface User {
  _id?: string; // MongoDB auto generate করবে
  firstName: string;
  lastName: string;
  email: string;
  password: string; // simple storage, production এ hash করতে হবে
  role: "admin" | "moderator" | "student";
}

// Get currently logged-in user from cookie
export async function getCurrentUser(): Promise<User | null> {
  try {
    const cookieStore = await cookies();
    const email = cookieStore.get("user_email")?.value;
    if (!email) return null;

    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db(dbName);
    const users = db.collection<User>("users");
    const user = await users.findOne({ email });
    await client.close();
    return user || null;
  } catch (err) {
    console.error("getCurrentUser error:", err);
    return null;
  }
}

// Register a new user
export async function registerUser(data: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role?: "admin" | "moderator" | "student";
}): Promise<User> {
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db(dbName);
  const users = db.collection<User>("users");

  const existing = await users.findOne({ email: data.email });
  if (existing) throw new Error("Email already exists");

  const newUser: User = {
    ...data,
    role: data.role || "student",
  };
  await client.close();
  const result = await users.insertOne(newUser);
  newUser._id = result.insertedId.toString();

  // Set cookie for login session
  const res = NextResponse.json(newUser);
  res.cookies.set("user_email", data.email, {
    path: "/",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24, // 1 day
  });

  return newUser;
}
