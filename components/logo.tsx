"use client";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href="/"
      prefetch={false}
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
    >
      <span className="font-mono text-xl font-medium text-black dark:text-white">
        Voxizo Media
      </span>
    </Link>
  );
};
