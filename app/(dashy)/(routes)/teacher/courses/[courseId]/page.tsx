import { IconBadge } from "@/components/IconBadge";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { Layout, LayoutDashboard } from "lucide-react";
import { redirect } from "next/navigation";
import React from "react";

const CoursePage = async ({ params }: { params: { courseId: string } }) => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const course = await db.course.findUnique({
    where: {
      id: params.courseId,
      userId: userId,
    },
  });

  if (!course) {
    return redirect("/teacher");
  }

  const tasks = [
    course.title,
    course.description,
    course.price,
    course.imageUrl,
    course.categoryId,
  ];

  const doneTasks = tasks.filter(Boolean).length;

  const remainingTasks = `${doneTasks}/${tasks.length}`;

  return (
    <div className="">
      <div className="p-6">
        <div>
          <h1 className="text-2xl font-bold">Course setup</h1>
          <p className=" text-md mt-2 text-slate-700 font-bold">
            Fields completed {remainingTasks}
          </p>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex gap-4">
              <IconBadge icon={LayoutDashboard}/>
              <div className="text-xl font-bold">Customize your course</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
