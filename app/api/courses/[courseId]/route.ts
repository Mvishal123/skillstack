import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { courseId: string } }
) {
  try {
    const userId = auth().userId;

    if (!userId) {
      return NextResponse.json({ message: "unauthorized" }, { status: 401 });
    }

    const { courseId } = params;
    const data = await req.json();

    const course = await db.course.update({
      where: {
        id: courseId,
        userId,
      },
      data: {
        ...data,
      },
    });

    return NextResponse.json(course, { status: 200 });
  } catch (error: any) {
    console.log("[COURSESID]", error.message);

    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
