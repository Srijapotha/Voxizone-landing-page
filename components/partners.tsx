"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { BsCheckCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import SectionHead from "./common/SectionHead";
export type Plan = {
  id: string;
  name: string;
  description: string;
  features: string[];
  icon: React.JSX.Element;
  onClick: () => void;
};

export const GoogleAds = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 48 48"
    >
      <polygon
        fill="#ffc107"
        points="30.129,15.75 18.871,9.25 5.871,31.25 17.129,37.75"
      ></polygon>
      <path
        fill="#1e88e5"
        d="M31.871,37.75c1.795,3.109,5.847,4.144,8.879,2.379c3.103-1.806,4.174-5.77,2.379-8.879l-13-22 c-1.795-3.109-5.835-4.144-8.879-2.379c-3.106,1.801-4.174,5.77-2.379,8.879L31.871,37.75z"
      ></path>
      <circle cx="11.5" cy="34.5" r="6.5" fill="#43a047"></circle>
    </svg>
  );
};
export const MetaAds = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 48 48"
    >
      <path
        fill="#0081fb"
        d="M47,29.36l-2.193,1.663L42.62,29.5c0-0.16,0-0.33-0.01-0.5c0-0.16,0-0.33-0.01-0.5	c-0.14-3.94-1.14-8.16-3.14-11.25c-1.54-2.37-3.51-3.5-5.71-3.5c-2.31,0-4.19,1.38-6.27,4.38c-0.06,0.09-0.13,0.18-0.19,0.28	c-0.04,0.05-0.07,0.1-0.11,0.16c-0.1,0.15-0.2,0.3-0.3,0.46c-0.9,1.4-1.84,3.03-2.86,4.83c-0.09,0.17-0.19,0.34-0.28,0.51	c-0.03,0.04-0.06,0.09-0.08,0.13l-0.21,0.37l-1.24,2.19c-2.91,5.15-3.65,6.33-5.1,8.26C14.56,38.71,12.38,40,9.51,40	c-3.4,0-5.56-1.47-6.89-3.69C1.53,34.51,1,32.14,1,29.44l4.97,0.17c0,1.76,0.38,3.1,0.89,3.92C7.52,34.59,8.49,35,9.5,35	c1.29,0,2.49-0.27,4.77-3.43c1.83-2.53,3.99-6.07,5.44-8.3l1.37-2.09l0.29-0.46l0.3-0.45l0.5-0.77c0.76-1.16,1.58-2.39,2.46-3.57	c0.1-0.14,0.2-0.28,0.31-0.42c0.1-0.14,0.21-0.28,0.31-0.41c0.9-1.15,1.85-2.22,2.87-3.1c1.85-1.61,3.84-2.5,5.85-2.5	c3.37,0,6.58,1.95,9.04,5.61c2.51,3.74,3.82,8.4,3.97,13.25c0.01,0.16,0.01,0.33,0.01,0.5C47,29.03,47,29.19,47,29.36z"
      ></path>
      <linearGradient
        id="wSMw7pqi7WIWHewz2_TZXa_PvvcWRWxRKSR_gr1"
        x1="42.304"
        x2="13.533"
        y1="24.75"
        y2="24.75"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#0081fb"></stop>
        <stop offset=".995" stopColor="#0064e1"></stop>
      </linearGradient>
      <path
        fill="url(#wSMw7pqi7WIWHewz2_TZXa_PvvcWRWxRKSR_gr1)"
        d="M4.918,15.456	C7.195,11.951,10.483,9.5,14.253,9.5c2.184,0,4.354,0.645,6.621,2.493c2.479,2.02,5.122,5.346,8.419,10.828l1.182,1.967	c2.854,4.746,4.477,7.187,5.428,8.339C37.125,34.606,37.888,35,39,35c2.82,0,3.617-2.54,3.617-5.501L47,29.362	c0,3.095-0.611,5.369-1.651,7.165C44.345,38.264,42.387,40,39.093,40c-2.048,0-3.862-0.444-5.868-2.333	c-1.542-1.45-3.345-4.026-4.732-6.341l-4.126-6.879c-2.07-3.452-3.969-6.027-5.068-7.192c-1.182-1.254-2.642-2.754-5.067-2.754	c-1.963,0-3.689,1.362-5.084,3.465L4.918,15.456z"
      ></path>
      <linearGradient
        id="wSMw7pqi7WIWHewz2_TZXb_PvvcWRWxRKSR_gr2"
        x1="7.635"
        x2="7.635"
        y1="32.87"
        y2="13.012"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#0081fb"></stop>
        <stop offset=".995" stopColor="#0064e1"></stop>
      </linearGradient>
      <path
        fill="url(#wSMw7pqi7WIWHewz2_TZXb_PvvcWRWxRKSR_gr2)"
        d="M14.25,14.5	c-1.959,0-3.683,1.362-5.075,3.465C7.206,20.937,6,25.363,6,29.614c0,1.753-0.003,3.072,0.5,3.886l-3.84,2.813	C1.574,34.507,1,32.2,1,29.5c0-4.91,1.355-10.091,3.918-14.044C7.192,11.951,10.507,9.5,14.27,9.5L14.25,14.5z"
      ></path>
      <path
        d="M21.67,20.27l-0.3,0.45l-0.29,0.46c0.71,1.03,1.52,2.27,2.37,3.69l0.21-0.37c0.02-0.04,0.05-0.09,0.08-0.13 c0.09-0.17,0.19-0.34,0.28-0.51C23.19,22.5,22.39,21.29,21.67,20.27z M24.94,15.51c-0.11,0.14-0.21,0.28-0.31,0.42 c0.73,0.91,1.47,1.94,2.25,3.1c0.1-0.16,0.2-0.31,0.3-0.46c0.04-0.06,0.07-0.11,0.11-0.16c0.06-0.1,0.13-0.19,0.19-0.28 c-0.76-1.12-1.5-2.13-2.23-3.03C25.15,15.23,25.04,15.37,24.94,15.51z"
        opacity=".05"
      ></path>
      <path
        d="M21.67,20.27l-0.3,0.45c0.71,1.02,1.51,2.24,2.37,3.65c0.09-0.17,0.19-0.34,0.28-0.51C23.19,22.5,22.39,21.29,21.67,20.27 z M24.63,15.93c0.73,0.91,1.47,1.94,2.25,3.1c0.1-0.16,0.2-0.31,0.3-0.46c-0.77-1.14-1.52-2.16-2.24-3.06 C24.83,15.65,24.73,15.79,24.63,15.93z"
        opacity=".07"
      ></path>
    </svg>
  );
};
export const TiktokAds = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 48 48"
    >
      <path
        fill="#212121"
        fillRule="evenodd"
        d="M10.904,6h26.191C39.804,6,42,8.196,42,10.904v26.191 C42,39.804,39.804,42,37.096,42H10.904C8.196,42,6,39.804,6,37.096V10.904C6,8.196,8.196,6,10.904,6z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#ec407a"
        fillRule="evenodd"
        d="M29.208,20.607c1.576,1.126,3.507,1.788,5.592,1.788v-4.011 c-0.395,0-0.788-0.041-1.174-0.123v3.157c-2.085,0-4.015-0.663-5.592-1.788v8.184c0,4.094-3.321,7.413-7.417,7.413 c-1.528,0-2.949-0.462-4.129-1.254c1.347,1.376,3.225,2.23,5.303,2.23c4.096,0,7.417-3.319,7.417-7.413L29.208,20.607L29.208,20.607 z M30.657,16.561c-0.805-0.879-1.334-2.016-1.449-3.273v-0.516h-1.113C28.375,14.369,29.331,15.734,30.657,16.561L30.657,16.561z M19.079,30.832c-0.45-0.59-0.693-1.311-0.692-2.053c0-1.873,1.519-3.391,3.393-3.391c0.349,0,0.696,0.053,1.029,0.159v-4.1 c-0.389-0.053-0.781-0.076-1.174-0.068v3.191c-0.333-0.106-0.68-0.159-1.03-0.159c-1.874,0-3.393,1.518-3.393,3.391 C17.213,29.127,17.972,30.274,19.079,30.832z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M28.034,19.63c1.576,1.126,3.507,1.788,5.592,1.788v-3.157 c-1.164-0.248-2.194-0.856-2.969-1.701c-1.326-0.827-2.281-2.191-2.561-3.788h-2.923v16.018c-0.007,1.867-1.523,3.379-3.393,3.379 c-1.102,0-2.081-0.525-2.701-1.338c-1.107-0.558-1.866-1.705-1.866-3.029c0-1.873,1.519-3.391,3.393-3.391 c0.359,0,0.705,0.056,1.03,0.159V21.38c-4.024,0.083-7.26,3.369-7.26,7.411c0,2.018,0.806,3.847,2.114,5.183 c1.18,0.792,2.601,1.254,4.129,1.254c4.096,0,7.417-3.319,7.417-7.413L28.034,19.63L28.034,19.63z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#81d4fa"
        fillRule="evenodd"
        d="M33.626,18.262v-0.854c-1.05,0.002-2.078-0.292-2.969-0.848 C31.445,17.423,32.483,18.018,33.626,18.262z M28.095,12.772c-0.027-0.153-0.047-0.306-0.061-0.461v-0.516h-4.036v16.019 c-0.006,1.867-1.523,3.379-3.393,3.379c-0.549,0-1.067-0.13-1.526-0.362c0.62,0.813,1.599,1.338,2.701,1.338 c1.87,0,3.386-1.512,3.393-3.379V12.772H28.095z M21.635,21.38v-0.909c-0.337-0.046-0.677-0.069-1.018-0.069 c-4.097,0-7.417,3.319-7.417,7.413c0,2.567,1.305,4.829,3.288,6.159c-1.308-1.336-2.114-3.165-2.114-5.183 C14.374,24.749,17.611,21.463,21.635,21.38z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};
const plans: Array<Plan> = [
  {
    id: "google-ad",
    name: "Google Ads",
    features: [
      "Unlimited Ad Spend",
      "Access to Google Merchant Center Accounts",
      "Pre-approved Ads",
      "Instant Top-ups",
      "24/7 Support",
    ],
    icon: <GoogleAds />,
    description:
      "Promote your business on the world's most visited platform. Boost visibility, enhance performance, and achieve cost-effective conversions effortlessly.",
    onClick: () => {
      console.log("Get Hobby");
    },
  },
  {
    id: "tiktok-ad",
    name: "TikTok Ads",
    features: [
      "Unlimited Ad Spend",
      "Worldwide Ad Reach",
      "24/7 Support",
      "Pre-approved Ads",
      "Quick Top-ups",
    ],
    icon: <TiktokAds />,
    description:
      "Launch and manage your global TikTok campaigns with ease. Advertise from a single account with unlimited ad spend and no complications.",

    onClick: () => {
      console.log("Get Starter");
    },
  },
  {
    id: "meta-ads",
    name: "Meta Ads",
    features: [
      "Unlimited Ad Spend",
      "Instant Top-ups",
      "Global Ad Campaigns",
      "24/7 Support",
      "Premium Services",
    ],
    icon: <MetaAds />,
    description:
      "Overcome challenges during ad testing or scaling with our expert assistance. We ensure a seamless experience so you can focus on growth.",

    onClick: () => {
      console.log("Get Pro");
    },
  },
];

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
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
};
export function Partners() {
  return (
    <section id="partners" className="bg-neutral-50 dark:bg-neutral-900">
      <div className="relative isolate mx-auto max-w-7xl px-4 py-20">
        <div
          className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
          aria-hidden="true"
        ></div>
        <>
          <SectionHead
            title="Connecting you to the Best Media Platforms"
            description="Advertise smarter across platform with limitless possibilities"
          />
        </>

        <motion.div
          className={cn(
            "mx-auto mt-20 grid grid-cols-1 gap-4",
            "mx-auto max-w-7xl md:grid-cols-2 xl:grid-cols-3",
          )}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
        >
          {plans.map((tier) => {
            return <Card plan={tier} key={tier.id} onClick={tier.onClick} />;
          })}
        </motion.div>
      </div>
    </section>
  );
}

const Card = ({ plan }: { plan: Plan; onClick: () => void }) => {
  return (
    <motion.div
      className={cn(
        "rounded-3xl border border-neutral-100 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-950",
      )}
      whileHover={{ scale: 1.03 }}
      variants={childVariants}
    >
      <div className="flex h-full flex-col justify-between gap-4">
        <div className="p-4">
          <h3 className="mb-4 text-neutral-700 dark:text-neutral-100 [&_svg]:size-16">
            {plan.icon}
            <span className="block pt-2 text-xl font-bold">{plan.name}</span>
          </h3>

          <p className="text-base leading-7 text-neutral-700 dark:text-neutral-200">
            {plan.description}
          </p>
        </div>
        <div>
          <Divider />

          <div className="mt-1 p-4">
            {plan.features.map((feature, idx) => (
              <Step key={idx}>{feature}</Step>
            ))}
          </div>
          <Button as="button" variant="primary" className="w-full">
            Apply Now
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const Step = ({
  children,
}: {
  children: React.ReactNode;
  additional?: boolean;
  featured?: boolean;
}) => {
  return (
    <div className="my-4 flex items-start justify-start gap-2">
      <div
        className={cn(
          "mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full",
        )}
      >
        <BsCheckCircleFill className="h-4 w-4 text-neutral-400" />
      </div>
      <div
        className={cn(
          "text-sm font-medium text-neutral-700 dark:text-neutral-200",
        )}
      >
        {children}
      </div>
    </div>
  );
};

const Divider = () => {
  return (
    <div className="relative">
      <div className={cn("h-px w-full bg-white dark:bg-neutral-950")} />
      <div className={cn("h-px w-full bg-neutral-200 dark:bg-neutral-800")} />
    </div>
  );
};
