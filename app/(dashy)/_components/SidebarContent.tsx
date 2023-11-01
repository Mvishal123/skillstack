"use client"
import React from "react";
import Content from "./Content";
import { Home, Network, Layout} from "lucide-react";

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
    dir: "/browse",
    icon: Network,
  },
];

const SidebarContent = () => {
  const contents = content;

  return <div className=" w-3/4 ">
    {contents.map((content) => {
        return <Content name={content.name} dir={content.dir} icon={content.icon}/>
        })}
  </div>;
};

export default SidebarContent;
