import Link from "next/link";
import React from "react";
import { LucideIcon } from "lucide-react";

interface ContentProps {
  name: string;
  icon: LucideIcon;
  dir: string;
}

const Content = ({ name, icon: Icon, dir }: ContentProps) => {
  return (
    <div className="flex justify-between">
      <Link href={dir}>{name}</Link>
      <Icon />
    </div>
  );
};

export default Content;
