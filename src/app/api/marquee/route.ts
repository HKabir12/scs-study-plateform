

import { NextResponse } from "next/server";
import { MongoClient, ObjectId } from "mongodb";

const uri = process.env.NEXT_PUBLIC_MONGODB_URI!;
const dbName = process.env.DB_NAME!;

/**
 * 🟢 GET → সব marquee data বা active marquee আনা
 */
export async function GET(req: Request) {
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db(dbName);

  const { searchParams } = new URL(req.url);
  const active = searchParams.get("active"); // /api/marquee?active=true হলে active টা আনা

  let data;
  if (active === "true") {
    data = await db.collection("announcements").findOne({ isActive: true });
  } else {
    data = await db.collection("announcements").find({}).sort({ updatedAt: -1 }).toArray();
  }

  await client.close();
  return NextResponse.json(data || []);
}

/**
 * 🟡 POST → নতুন marquee তৈরি করা
 */
export async function POST(req: Request) {
  const { text, isActive = false } = await req.json();

  if (!text || typeof text !== "string") {
    return NextResponse.json({ error: "Invalid marquee text" }, { status: 400 });
  }

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db(dbName);

  const result = await db.collection("announcements").insertOne({
    text,
    isActive,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  await client.close();
  return NextResponse.json({ success: true, id: result.insertedId });
}

/**
 * 🔵 PATCH → marquee update করা
 * body: { id?, text?, isActive? }
 */
export async function PATCH(req: Request) {
  const { id, text, isActive } = await req.json();

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db(dbName);

  // যদি active marquee করতে চাও, আগে অন্যগুলো inactive করে দেবে
  if (isActive === true) {
    await db.collection("announcements").updateMany({}, { $set: { isActive: false } });
  }

  const filter = id ? { _id: new ObjectId(id) } : { isActive: true };
  const updateDoc: any = {
    $set: { updatedAt: new Date() },
  };
  if (text) updateDoc.$set.text = text;
  if (typeof isActive === "boolean") updateDoc.$set.isActive = isActive;

  await db.collection("announcements").updateOne(filter, updateDoc);

  await client.close();
  return NextResponse.json({ success: true });
}

/**
 * 🔴 DELETE → marquee ডিলিট করা
 * body: { id }
 */
export async function DELETE(req: Request) {
  const { id } = await req.json();
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db(dbName);

  const result = await db
    .collection("announcements")
    .deleteOne({ _id: new ObjectId(id) });

  await client.close();
  return NextResponse.json({ success: result.deletedCount > 0 });
}
