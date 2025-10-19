import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

// PATCH — update a user's role
export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const usersCollection =await dbConnect("users"); // ✅ Get the collection
    const body = await req.json();

    await usersCollection.updateOne(
      { _id: new ObjectId(params.id) },
      { $set: { role: body.role } }
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 }
    );
  }
}

// DELETE — remove a user
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const usersCollection =await dbConnect("users"); // ✅ Get the collection
    await usersCollection.deleteOne({ _id: new ObjectId(params.id) });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting user:", error);
    return NextResponse.json(
      { error: "Failed to delete user" },
      { status: 500 }
    );
  }
}
