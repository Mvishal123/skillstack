import Link from "next/link";
import React from "react";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface ContentProps {
  name: string;
  icon: LucideIcon;
  dir: string;
}

const Content = ({ name, icon: Icon, dir }: ContentProps) => {
  const pathname = usePathname();
  const router = useRouter();


  const isActive =
    (pathname === "/" && dir === "/") ||
    pathname === dir 
    // pathname.startsWith(`${dir}/`);
  const onClick = () => {
    router.push(dir);
  };
  return (
    <button
      className={cn(
        "flex w-full bg pl-6 hover:bg-slate-300/25 h-full",
        isActive && "bg-slate-300/75 hover:bg-slate-300/75"
      )}
      onClick={onClick}
    >
      <div className="flex gap-3 py-6">
        <Icon />
        <span>{name}</span>
      </div>
      <div
        className={cn("border-2 h-full border-slate-400 ml-auto opacity-0", isActive && "opacity-100")}
      />
    </button>
  );
};

export default Content;
