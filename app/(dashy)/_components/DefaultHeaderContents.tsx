"use client";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { LogOut } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import React from "react";

const DefaultHeaderContents = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isTeacher = pathname.includes("/teacher");
  const route = isTeacher ? "teacher" : "student";

  return (
    <div>
      <div className="flex gap-8">
        {route === "teacher" ? (
          <Button
            variant={"ghost"}
            size="sm"
            onClick={() => router.push("/")}
            className="gap-2"
          >
            <LogOut />
            Exit
          </Button>
        ) : (
          <Button
            size={"sm"}
            variant={"ghost"}
            onClick={() => router.push("/teacher")}
          >
            Teacher mode
          </Button>
        )}

        <UserButton />
      </div>
    </div>
  );
};

export default DefaultHeaderContents;
