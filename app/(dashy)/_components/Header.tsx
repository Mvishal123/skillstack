import React from "react";
import MobileSidebar from "./MobileSidebar";
import { UserButton } from "@clerk/nextjs";


const Header = () => {
  return (
    <div className="h-full border-b shadow flex items-center px-4">
      <div className="md:hidden">
        <MobileSidebar />
      </div>
      <div className="ml-auto">
        <UserButton />
      </div>

    </div>
  );
};

export default Header;
