"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import SectionHead from "./common/SectionHead";

const FAQs = [
  {
    question: "Can I run Greyhat or Blackhat ads with your services?",
    answer:
      "We support Whitehat to Greyhat campaigns but do not accommodate pure Blackhat practices.",
  },
  {
    question: "How long does it take to get started?",
    answer:
      "Once onboarded, you'll need to make your first deposit and request an ad account. The account setup typically takes 24-48 hours, depending on the partner selected during your request.",
  },
  {
    question: "How many ad accounts can I get?",
    answer:
      "There is no fixed limit to the number of ad accounts you can have. The availability depends on your monthly ad spend and compliance with the media channel's policies. As long as you meet the requirements, there are no restrictions.",
  },
  {
    question: "How long does it take to refund unused top-ups?",
    answer:
      "Refunds for remaining balances are processed within 7-10 days after submitting a request.",
  },
  {
    question: "I've been banned before. Can you help?",
    answer:
      "Yes, we provide support if you've faced bans or issues with platforms like Facebook. We assist in diagnosing the problems and offer resources to help you recover or replace lost profiles, Business Managers, or Pages.",
  },
  {
    question: "Can I top up ad accounts 24/7?",
    answer:
      "Yes, our global team ensures top-ups are available nearly 24/7. With someone always online, you can scale seamlessly and manage cash flow efficiently.",
  },
  {
    question: "I sell health or nutraceutical products. Can you support me?",
    answer:
      "Yes, we can support you. However, we'll need to review your website and landing pages to ensure they comply with the ad channel's policies.",
  },
  {
    question: "Can funds be transferred between ad accounts?",
    answer:
      "Yes, funds can be transferred between accounts. This process typically takes 2-10 hours, depending on the complexity of the accounts.",
  },
];
export function Faq() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section id="faq" className="bg-white dark:bg-neutral-950">
      <div className="mx-auto grid w-full max-w-7xl gap-4 px-4 py-20 md:px-8">
        <SectionHead
          title="Frequently Asked Questions"
          description="Your top questions answered in one place."
        />

        <div className="mx-auto mt-10 w-full max-w-3xl">
          {FAQs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              open={open}
              setOpen={setOpen}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQItem = ({
  question,
  answer,
  setOpen,
  open,
}: {
  question: string;
  answer: string;
  open: string | null;
  setOpen: (open: string | null) => void;
}) => {
  const isOpen = open === question;

  return (
    <div
      className="mb-5 w-full cursor-pointer rounded-2xl border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900"
      onClick={() => {
        if (isOpen) {
          setOpen(null);
        } else {
          setOpen(question);
        }
      }}
    >
      <div className="flex items-start">
        <div className="relative mr-4 mt-1 h-6 w-6 flex-shrink-0">
          <IconPlus
            className={cn(
              "absolute inset-0 h-6 w-6 transform text-neutral-500 transition-all duration-200",
              isOpen && "rotate-90 scale-0",
            )}
          />
          <IconMinus
            className={cn(
              "absolute inset-0 h-6 w-6 rotate-90 scale-0 transform text-neutral-500 transition-all duration-200",
              isOpen && "rotate-0 scale-100",
            )}
          />
        </div>
        <div>
          <h3 className="text-lg font-medium text-neutral-700 dark:text-neutral-200">
            {question}
          </h3>
          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="overflow-hidden pt-2 leading-7 text-neutral-500 dark:text-neutral-400"
              >
                {answer.split("").map((line, index) => (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 0.2,
                      ease: "easeOut",
                      delay: index * 0.005,
                    }}
                    key={index}
                  >
                    {line}
                  </motion.span>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
