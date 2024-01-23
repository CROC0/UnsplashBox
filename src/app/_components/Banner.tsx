"use client";

import Link from "next/link";
import type { Route } from "next";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Banner() {
  const path = usePathname();

  return (
    <div className="w-screen border-b border-b-[#6C727F]">
      <div className="max-w-[1280px] mx-auto px-6 py-5 flex items-center justify-between">
        <div>
          <img src={"/Logo.svg"} />
        </div>
        <div className="flex gap-2 items-center">
          <Button active={path === "/"} href={"/"}>
            Home
          </Button>
          <Button active={path == "/collections"} href={"/collections"}>
            Collection
          </Button>
          <div>
            <ToggleDarkMode />
          </div>
        </div>
      </div>
    </div>
  );
}

interface ButtonProps<T extends string> {
  children: React.ReactNode;
  active: boolean;
  href: Route<T> | URL;
}

function Button<T extends string>({ children, active, href }: ButtonProps<T>) {
  return (
    <Link className={`p-2 ${active ? "bg-[#E5E7EBCC]" : ""}`} href={href}>
      {children}
    </Link>
  );
}

function ToggleDarkMode() {
  const [liteMode, setLiteMode] = useState(true);

  function handleChange() {
    setLiteMode((p) => !p);
  }
  return (
    <div className="h-6 w-6">
      <img onClick={handleChange} src={liteMode ? "/light.svg" : "/dark.svg"} />
    </div>
  );
}
