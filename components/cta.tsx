"use client";
import React from "react";
import { Button } from "./button";
import SectionHead from "./common/SectionHead";
import { Url } from "@/constants/urls";
import { BsWhatsapp } from "react-icons/bs";
export const CTA = () => {
  return (
    <section className="relative z-30 w-full overflow-hidden bg-neutral-950 py-20">
      <div className="">
        <div className="relative z-20 mx-auto w-full bg-gradient-to-b from-neutral-900 to-transparent sm:max-w-[40rem] sm:rounded-3xl md:max-w-[48rem] lg:max-w-[64rem] xl:max-w-[80rem]">
          <div className="relative -mx-6 overflow-hidden px-6 sm:mx-0 sm:rounded-2xl md:px-8">
            <div
              className="pointer-events-none absolute inset-y-0 right-0 select-none overflow-hidden rounded-2xl"
              style={{
                mask: "radial-gradient(33.875rem 33.875rem at calc(100% - 8.9375rem) 0, white 3%, transparent 70%)",
              }}
            ></div>

            <div className="relative px-6 pb-14 pt-20 sm:px-10 sm:pb-20 lg:px-[4.5rem]">
              <SectionHead
                title="Let's take your growth to the next level!"
                description="Connect with us on WhatsApp for premium-quality agency ad accounts designed to scale your business effectively. "
              />

              <div className="relative z-10 mx-auto mt-6 flex justify-center">
                <Button
                  href={Url.Whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <BsWhatsapp /> Text us on Whatsapp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
