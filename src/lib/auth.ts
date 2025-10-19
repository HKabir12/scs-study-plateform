"use server";

import { MongoClient } from "mongodb";
import bcrypt from "bcryptjs";

const uri = process.env.NEXT_PUBLIC_MONGODB_URI as string;
const dbName = process.env.DB_NAME as string;

interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface UserDocument extends RegisterFormData {
  role: string;
  createdAt: Date;
}

export async function registerUser(
  formData: RegisterFormData
): Promise<UserDocument> {
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db(dbName);
  const users = db.collection<UserDocument>("users");

  // Check if email already exists
  const existingUser = await users.findOne({ email: formData.email });
  if (existingUser) {
    await client.close();
    throw new Error("এই ইমেইলটি ইতিমধ্যে ব্যবহৃত হচ্ছে!");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(formData.password, 10);

  const newUser: UserDocument = {
    ...formData,
    password: hashedPassword,
    role: "student", // default role
    createdAt: new Date(),
  };

  await users.insertOne(newUser);
  await client.close();

  return newUser;
}
