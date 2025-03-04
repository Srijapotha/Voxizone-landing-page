"use client";
import React from "react";
import SectionHead from "./common/SectionHead";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { WorldGlobe } from "./world";

export function Experience() {
  const line1 = [
    "Brands",
    "E-Commerce",
    "Marketing Agencies",
    "Local Businesses",
    "Freelancers",
    "Affiliates",
    "Dropshippers",
    "Copywriters",
    "Influencers",
  ];
  const line2 = [
    "Entrepreneurs",
    "Small Businesses",
    "Startups",
    "Consultants",
    "Content Creators",
    "Bloggers",
    "Digital Marketers",
    "Social Media Managers",
    "Podcasters",
  ];
  const line3 = [
    "Web Developers",
    "Tech Startups",
    "Fitness Trainers",
    "Beauty Brands",
    "Health and Wellness Coaches",
    "Real Estate Agents",
    "Interior Designers",
    "Consulting Firms",
    "Personal Brands",
  ];

  return (
    <section className="bg-white px-4 py-24 dark:bg-neutral-950">
      <SectionHead
        title="Guidance and Support for All Business Types"
        description="We support all business shapes and sizes. Our expert teams help you shape strategic decisions and grow your online presence, no matter your business."
      />
      <div className="relative mx-auto mt-16 max-w-2xl overflow-hidden bg-white py-28 dark:border-neutral-800 dark:bg-neutral-950">
        <InfiniteMovingCards speed="normal" direction="left">
          <Card items={line1} />
        </InfiniteMovingCards>
        <InfiniteMovingCards speed="normal" direction="right">
          <Card items={line2} />
        </InfiniteMovingCards>
        <InfiniteMovingCards speed="normal" direction="left">
          <Card items={line3} />
        </InfiniteMovingCards>
        <WorldGlobe />
      </div>
    </section>
  );
}

function Card({ items }: { items: string[] }) {
  return (
    <>
      <div className="relative z-40 flex space-x-4">
        {items.map((item) => {
          return (
            <span
              key={item}
              className="flex items-center justify-center space-x-1 rounded-xl bg-white px-6 py-2 text-base text-neutral-700 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:bg-neutral-900 dark:text-neutral-200"
            >
              {item}
            </span>
          );
        })}
      </div>
    </>
  );
}
