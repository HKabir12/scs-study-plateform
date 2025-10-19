// src/lib/auth.ts
"use server";

import { cookies } from "next/headers";
import { MongoClient } from "mongodb";

const uri = process.env.NEXT_PUBLIC_MONGODB_URI as string;
const dbName = process.env.DB_NAME as string;

export interface User {
  _id: string;
  name: string;
  email: string;
  role: "admin" | "moderator" | "student";
}

// Example: get currently logged-in user from cookie (mock/session)
export async function getCurrentUser(): Promise<User | null> {
  try {
    const cookieStore =await cookies();
    const userEmail = cookieStore.get("user_email")?.value;

    if (!userEmail) return null;

    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db(dbName);
    const users = db.collection<User>("users");

    const user = await users.findOne({ email: userEmail });
    await client.close();

    return user || null;
  } catch (err) {
    console.error("getCurrentUser error:", err);
    return null;
  }
}
