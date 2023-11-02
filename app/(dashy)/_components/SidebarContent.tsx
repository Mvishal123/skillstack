"use client";
import React from "react";
import Content from "./Content";
import { Home, Layout, Compass } from "lucide-react";

const content = [
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

const SidebarContent = () => {
  const contents = content;

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
