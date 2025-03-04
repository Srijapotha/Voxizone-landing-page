import { Metadata } from "next";

import { OnboardForm } from "@/components/onboard-form";

export const metadata: Metadata = {
  title: "Apply for Agency Accounts | Voxizo Media",
  description: "Create your FREE account to start your journey.",
};

export default function Contact() {
  return (
    <div className="relative overflow-hidden bg-neutral-100 px-4 py-20 dark:bg-neutral-950 md:px-20">
      <div className="relative grid min-h-screen w-full grid-cols-1 overflow-hidden">
        <OnboardForm />
      </div>
    </div>
  );
}
