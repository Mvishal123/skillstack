import React from "react";
import Sidebar from "./_components/Sidebar";
import Header from "./_components/Header";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="md:pl-52 w-full inset-y-0 h-[85px] fixed z-0">
        <Header />
      </div>
      <div className="inset-y-0 fixed h-full border-r w-52 hidden md:flex z-50">
        <Sidebar />
      </div>
      <main className="md:pl-52 h-full pt-20">{children}</main>
    </div>
  );
};

export default layout;
