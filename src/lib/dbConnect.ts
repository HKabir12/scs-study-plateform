"use server";

import { MongoClient, ServerApiVersion } from "mongodb";

let cachedClient: MongoClient | null = null;

/**
 * MongoDB Connection Utility for Safwan's Chemistry Solution
 * Returns a collection reference
 */
export async function dbConnect(collectionName: string) {
  const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
  const dbName = process.env.DB_NAME;

  if (!uri || !dbName) {
    throw new Error("Missing MongoDB connection environment variables.");
  }

  // Reuse client if already connected (avoid multiple connections in dev)
  if (!cachedClient) {
    cachedClient = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
      maxPoolSize: 10,
    });

    await cachedClient.connect();
  }

  return cachedClient.db(dbName).collection(collectionName);
}

export default dbConnect;
