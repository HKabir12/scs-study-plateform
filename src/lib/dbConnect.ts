"use server";

import { MongoClient, ServerApiVersion } from "mongodb";

// MongoDB Connection Utility for Safwan's Chemistry Solution
export function dbConnect(collectionName: string) {
  const uri = process.env.NEXT_PUBLIC_MONGODB_URI;

  const dbName = process.env.DB_NAME;
  

  if (!uri || !dbName) {
    throw new Error("Missing MongoDB connection environment variables.");
  }

  // Create MongoDB client with stable API version and connection pool
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
    maxPoolSize: 10,
  });

  // Return collection reference
  return client.db(dbName).collection(collectionName);
}

export default dbConnect;
