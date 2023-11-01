import React from "react";
import Logo from "./Logo";
import SidebarContent from "./SidebarContent";

const Sidebar = () => {
  return (
    <div className="hidden md:flex h-screen border-r w-52 flex-col gap-4">
      <div className="p-4">
        <Logo />
      </div>
      <div className="w-full flex justify-center ">
        <SidebarContent />
      </div>
    </div>
  );
};

export default Sidebar;
