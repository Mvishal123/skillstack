import React from "react";
import MobileSidebar from "./MobileSidebar";
import DefaultHeaderContents from "./DefaultHeaderContents";

const Header = () => {
  return (
    <div className="h-full border-b shadow flex items-center px-4">
      <div className="md:hidden">
        <MobileSidebar />
      </div>
      <div className="ml-auto ">
        <DefaultHeaderContents />
      </div>
    </div>
  );
};

export default Header;
