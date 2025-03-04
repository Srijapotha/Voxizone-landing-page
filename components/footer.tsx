import Link from "next/link";
import React from "react";
import { Logo } from "./logo";
import { GridPattern } from "./GridPatterrn";
import Social from "./social";
export function Footer() {
  const pages = [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  const legals = [
    {
      title: "Privacy Policy",
      href: "/legal/privacy",
    },
    {
      title: "Terms and Conditions",
      href: "/legal/terms",
    },
  ];

  const pattern = {
    y: -6,
    squares: [
      [-1, 2],
      [1, 3],
      // Random values between -10 and 10
      ...Array.from({ length: 10 }, () => [
        Math.floor(Math.random() * 20) - 10,
        Math.floor(Math.random() * 20) - 10,
      ]),
    ],
  };
  return (
    <footer className="relative w-full overflow-hidden bg-gradient-to-b from-neutral-950 to-neutral-900 px-8 py-20 dark:border-white/[0.1]">
      <div className="pointer-events-none absolute inset-0 z-10 rounded-2xl opacity-30 transition duration-300 [mask-image:linear-gradient(transparent,white)] group-hover:opacity-50">
        <GridPattern
          width={80}
          height={80}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-5deg] fill-black/10 stroke-black/10 dark:fill-white/10 dark:stroke-white/10"
          {...pattern}
        />
      </div>
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between text-sm text-neutral-500 sm:flex-row md:px-8">
        <div>
          <div className="mb-4 mr-0 md:mr-4 md:flex">
            <Logo />
          </div>
          <Social className="justify-start pl-2" />
          <div className="ml-2 mt-2">
            <address>
              Suite C, Level 7, World Trust <br />
              Tower, 50 Stanley Street <br />
              Central Hong Kong <br />
            </address>
          </div>
          <div className="ml-2 mt-2">&copy; 2024. All rights reserved.</div>
        </div>
        <div className="mt-10 grid grid-cols-2 items-start gap-10 sm:mt-0 md:mt-0">
          <div className="flex w-full flex-col justify-center space-y-4">
            <p className="hover:text-text-neutral-800 font-bold text-neutral-600 transition-colors dark:text-neutral-300">
              Pages
            </p>
            <ul className="hover:text-text-neutral-800 list-none space-y-4 text-neutral-600 transition-colors dark:text-neutral-300">
              {pages.map((page, idx) => (
                <li key={"pages" + idx} className="list-none">
                  <Link
                    className="hover:text-text-neutral-800 transition-colors"
                    href={page.href}
                    prefetch={false}
                  >
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-center space-y-4">
            <p className="hover:text-text-neutral-800 font-bold text-neutral-600 transition-colors dark:text-neutral-300">
              Legal
            </p>
            <ul className="hover:text-text-neutral-800 list-none space-y-4 text-neutral-600 transition-colors dark:text-neutral-300">
              {legals.map((legal, idx) => (
                <li key={"legal" + idx} className="list-none">
                  <Link
                    className="hover:text-text-neutral-800 transition-colors"
                    href={legal.href}
                    prefetch={false}
                  >
                    {legal.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <p className="inset-x-0 z-20 mt-20 bg-gradient-to-b from-neutral-100 to-neutral-200 bg-clip-text text-center text-5xl font-bold uppercase text-transparent dark:from-neutral-900 dark:to-neutral-800 md:text-9xl lg:text-[12rem] xl:text-[13rem]">
        Voxizo
      </p>
    </footer>
  );
}
