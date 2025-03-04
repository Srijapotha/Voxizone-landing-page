import { Metadata } from "next";
import { ContactForm } from "@/components/contact";

export const metadata: Metadata = {
  title: "Contact Us | Voxizo Media",
  description: "We will help you to solve your problem",
};

export default function Contact() {
  return (
    <div className="relative overflow-hidden bg-neutral-100 px-4 py-20 dark:bg-neutral-950 md:px-20 md:py-0">
      <div className="relative grid min-h-screen w-full grid-cols-1 overflow-hidden">
        <ContactForm />
      </div>
    </div>
  );
}
