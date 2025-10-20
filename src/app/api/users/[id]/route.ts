import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

// PATCH → update user's role
export async function PATCH(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;

  if (!id) {
    return NextResponse.json({ error: "Missing user ID" }, { status: 400 });
  }

  try {
    const usersCollection = await dbConnect("users");
    const body = await req.json();

    if (!body.role) {
      return NextResponse.json({ error: "Missing role" }, { status: 400 });
    }

    await usersCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { role: body.role } }
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error updating user:", err);
    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 }
    );
  }
}

// DELETE → remove a user
export async function DELETE(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;

  if (!id) {
    return NextResponse.json({ error: "Missing user ID" }, { status: 400 });
  }

  try {
    const usersCollection = await dbConnect("users");
    const result = await usersCollection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error deleting user:", err);
    return NextResponse.json(
      { error: "Failed to delete user" },
      { status: 500 }
    );
  }
}
