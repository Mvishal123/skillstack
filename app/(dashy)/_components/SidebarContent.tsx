"use client";
import React from "react";
import Content from "./Content";
import { Home, Layout, Compass, BookOpen, BarChart } from "lucide-react";
import { usePathname } from "next/navigation";

const userContent = [
  {
    name: "Home",
    dir: "/",
    icon: Home,
  },
  {
    name: "Dashboard",
    dir: "/dashboard",
    icon: Layout,
  },
  {
    name: "Browse",
    dir: "/search",
    icon: Compass,
  },
];

const teacherContent = [
  {
    name: "Home",
    dir: "/teacher",
    icon: Home,
  },
  {
    name: "Courses",
    dir: "/teacher/courses",
    icon: BookOpen,
  },
  {
    name: "Analytics",
    dir: "/teacher/analytics",
    icon: BarChart,
  },
];

const SidebarContent = () => {
  const pathname = usePathname();

  const isTeacher = pathname.includes("/teacher");
  const contents = isTeacher ? teacherContent : userContent;

  return (
    <div className="w-full flex flex-col">
      {contents.map((content) => {
        return (
          <div key={content.name}>
            <Content
              name={content.name}
              dir={content.dir}
              icon={content.icon}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SidebarContent;
