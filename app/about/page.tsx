import { Metadata } from "next";
import SectionHead from "@/components/common/SectionHead";

export const metadata: Metadata = {
  title: "About Us | Voxizo Media",
  description: "Get More details about us",
};

export default function About() {
  return (
    <div className="relative overflow-hidden bg-neutral-100 px-4 py-20 dark:bg-neutral-950 md:px-20 md:py-0">
      <div className="relative grid min-h-screen w-full grid-cols-1 overflow-hidden">
        <div className="mx-auto flex w-full items-center justify-center px-4 py-4 sm:px-6 lg:flex-none lg:px-20 lg:py-12 xl:px-24">
          <div className="w-full max-w-3xl">
            <SectionHead
              title="Welcome to Voxizo Media"
              description="Your trusted advertising partner for unparalleled growth and success"
            />
            <div className="mt-10 space-y-5 text-lg leading-7 text-neutral-300">
              <p>
                At Voxizo Media, we specialize in delivering cutting-edge
                marketing solutions tailored for e-commerce brands,
                dropshippers, affiliate marketers, and businesses across various
                industries. We are your one-stop destination for all your
                marketing needs, offering expertise and support across major
                advertising platforms, including META, TikTok, Google, Snapchat,
                Bing, and more.
              </p>
              <p>
                Our top-tier agency ad accounts are meticulously designed to
                maximize your ad spend, ensuring seamless scaling while keeping
                costs in check. Whether you&spo;re looking to launch your first
                campaign or scale an existing business, we provide the tools and
                expertise to help you succeed.
              </p>

              <p>
                Although we are headquartered in Europe, our operations are
                expertly managed from Hong Kong, giving us a truly global
                perspective. This unique positioning allows us to offer 24/7
                support, ensuring that our clients receive timely assistance and
                uninterrupted service.
              </p>
              <p>
                At Voxizo Media, we are committed to driving exceptional results
                for our clients. With a focus on innovation, transparency, and
                performance, we empower businesses to achieve their advertising
                goals and scale to new heights.
              </p>
              <p>
                Let&apos;s grow together—because your success is our mission.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
