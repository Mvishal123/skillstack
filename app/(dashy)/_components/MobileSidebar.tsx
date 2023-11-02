"use client"

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import HeaderMenu from "./HeaderMenu";
import Sidebar from "./Sidebar";

const MobileSidebar = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <HeaderMenu />
        </SheetTrigger>
        <SheetContent className="w-1/2 px-0" side={"left"}>
            <Sidebar />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSidebar;
