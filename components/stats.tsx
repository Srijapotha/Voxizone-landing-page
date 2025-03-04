"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { GridPattern } from "./GridPatterrn";
import SectionHead from "./common/SectionHead";

export function Stats() {
  const items = [
    {
      title: "Active Clients",
      value: "250+",
    },
    {
      title: "Ad Accounts Managed",
      value: "1500+",
    },
    {
      title: "Total Adevertising Spend",
      value: "$20M+",
    },
  ];
  return (
    <section className="bg-neutral-50 px-4 py-24 dark:bg-neutral-900">
      <SectionHead
        title="The Numbers That Define our Excellence"
        description="Our clients trust us, and we're  confident you will too!"
      />
      <div className="mx-auto mt-16 max-w-7xl overflow-hidden rounded-3xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={"card" + index}
              className={cn(
                "group/card relative overflow-hidden p-10",
                index !== items.length - 1 &&
                  "border-b border-neutral-200 dark:border-neutral-800 md:border-b-0 md:border-r",
              )}
            >
              <Grid size={40} />

              <p className="text-3xl font-bold text-neutral-700 dark:text-neutral-100">
                {item.value}
              </p>
              <p className="mt-4 text-balance text-lg font-bold text-neutral-600 dark:text-neutral-300">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-100/30 to-zinc-300/30 opacity-100 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 dark:to-zinc-900/30">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full skew-y-[-5deg] fill-black/10 stroke-black/10 mix-blend-overlay dark:fill-white/10 dark:stroke-white/10"
        />
      </div>
    </div>
  );
};
