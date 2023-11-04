import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const userId = auth().userId;
    const { title } = await req.json();

    console.log(userId, title);
    

    if (!userId) {
      return NextResponse.json({ message: "unauthorized" }, { status: 401 });
    }

    const course = await db.course.create({
      data: {
        userId,
        title: title,
      },
    });

    return NextResponse.json({ course }, { status: 200 });
  } catch (error: any) {
    console.log("[COURSES API]", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
