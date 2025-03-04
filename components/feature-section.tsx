import React from "react";
import { useId } from "react";
import {
  BsBarChartLineFill,
  BsBuildingFill,
  BsCartFill,
  BsCash,
  BsShieldFillCheck,
  BsWalletFill,
} from "react-icons/bs";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
export function FeaturesSectionDemo() {
  return (
    <motion.div
      className="py-20 lg:py-40"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 sm:grid-cols-2 md:grid-cols-3 md:gap-7">
        {grid.map((feature) => (
          <motion.div
            key={feature.title}
            variants={childVariants}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-neutral-100 to-white p-6 dark:from-neutral-900 dark:to-neutral-950"
          >
            <Grid size={30} />
            <div className="mb-4 flex size-16 items-center justify-center rounded-2xl bg-neutral-200 dark:bg-neutral-800 [&_svg]:size-8 [&_svg]:fill-neutral-600 dark:[&_svg]:fill-neutral-200">
              {feature.icon}
            </div>
            <h3 className="relative z-20 text-lg font-bold text-neutral-800 dark:text-white">
              {feature.title}
            </h3>
            <p className="relative z-20 mt-4 text-base font-normal leading-7 text-neutral-600 dark:text-neutral-400">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

const grid = [
  {
    title: "Agency Ad Accounts",
    description:
      "Run your campaigns seamlessly with our verified Agency Ad Accounts. Say goodbye to unexpected blackouts and keep your revenue growing effortlessly.",
    icon: <BsBuildingFill />,
  },
  {
    title: "Instant Top-ups",
    description:
      "No delays, no downtime! We provide instant top-ups to keep your campaigns running smoothly, no matter when the transfer reaches us.",
    icon: <BsWalletFill />,
  },
  {
    title: "No Cap on Ad Spends",
    description:
      "Scale your business to new heights with unlimited ad spending on our accounts—no restrictions, just growth!",
    icon: <BsBarChartLineFill />,
  },
  {
    title: "Hassle-free Payments",
    description:
      "Forget payment headaches! We offer flexible payment options tailored to suit your needs, making transactions smooth and stress-free.",
    icon: <BsCash />,
  },
  {
    title: "Dedicated Account Managers",
    description:
      "Unlock your full potential with the help of our expert account managers. They're here to guide and support you on any advertising platform.",
    icon: <BsShieldFillCheck />,
  },
  {
    title: "Exclusive E-commerce Solutions",
    description:
      "Get access to our premium e-commerce advertising strategies. Our agency ad account holders benefit from solutions designed to drive results!",
    icon: <BsCartFill />,
  },
];

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
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
          className="absolute inset-0 h-full w-full fill-black/10 stroke-black/10 mix-blend-overlay dark:fill-white/10 dark:stroke-white/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}-${y}-${x}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
