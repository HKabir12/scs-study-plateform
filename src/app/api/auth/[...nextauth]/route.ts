/* eslint-disable @typescript-eslint/no-explicit-any */


import { authOptions } from "@/helper/authOptions";
import { MongoClient } from "mongodb";
import NextAuth from "next-auth/next";


const uri = process.env.NEXT_PUBLIC_MONGODB_URI!;
const dbName = process.env.DB_NAME!;

export const getDbCollection = async (collectionName: string) => {
  const client = new MongoClient(uri);
  await client.connect();
  return client.db(dbName).collection(collectionName);
}


export const getUserByEmail = async(email: string) => {
  const users = await getDbCollection("users");
  return users.findOne({ email });
}

export const saveUser = async (user: any) => {
  const users = await getDbCollection("users");
  const existingUser = await users.findOne({ email: user.email });
  if (!existingUser) {
    const newUser = {
      firstName: user.firstName || user.name?.split(" ")[0] || "User",
      lastName: user.lastName || user.name?.split(" ")[1] || "",
      email: user.email,
      image: user.image || "",
      password: user.password || "",
      role: "student",
      createdAt: new Date(),
    };
    await users.insertOne(newUser);
    return newUser;
  }
  return existingUser;
}




const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };