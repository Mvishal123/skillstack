import React from "react";
import Sidebar from "./_components/Sidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
  <div>
    <div >
        <Sidebar />
    </div>
    {children}
  </div>
  );
};

export default layout;
